import { expect, it } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../src/activities'
import { Activity } from '../src/types'
import { MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from '../src/constants'

it('updates activity', () => {
  const activity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: SECONDS_IN_MINUTE * MINUTES_IN_HOUR
  }

  const updatedActivity: Activity = {
    id: '2',
    name: 'Programming',
    secondsToComplete: 7200
  }

  updateActivity(activity, updatedActivity)

  expect(activity).toEqual(updatedActivity)
})

it('calculates activity completion percentage', () => {
  const activity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: 3600
  }

  expect(calculateActivityCompletionPercentage(activity, 0)).toBe(0)
  expect(calculateActivityCompletionPercentage(activity, 1800)).toBe(50)
  expect(calculateActivityCompletionPercentage(activity, 3600)).toBe(100)
})
