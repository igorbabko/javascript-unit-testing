import { expect, it } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../src/activities'
import { MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from '../src/constants'
import { Activity } from '../src/types'

it('updates activity', () => {
  const activity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1
  }

  const updatedActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 2
  }

  updateActivity(activity, updatedActivity)

  expect(activity).toEqual(updatedActivity)
})

it('calculates activity completion percentage', () => {
  const activity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1
  }

  expect(
    calculateActivityCompletionPercentage(activity, SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 0)
  ).toBe(0)
  expect(
    calculateActivityCompletionPercentage(activity, SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 0.5)
  ).toBe(50)
  expect(
    calculateActivityCompletionPercentage(activity, SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1)
  ).toBe(100)
})
