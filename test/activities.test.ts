import { expect, it } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../src/activities'
import { HUNDRED_PERCENT, SECONDS_IN_HOUR } from '../src/constants'
import { Activity } from '../src/types'

it('updates activity', () => {
  const activity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: SECONDS_IN_HOUR * 1
  }
  const updatedFields: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: SECONDS_IN_HOUR * 2
  }

  const updatedActivity = updateActivity(activity, updatedFields)

  expect(activity).toEqual(updatedFields)
  expect(updatedActivity).toEqual(updatedFields)
})

it('calculates activity completion percentage', () => {
  const activity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: SECONDS_IN_HOUR * 1
  }

  expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 0)).toBe(0)
  expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 0.5)).toBe(50)
  expect(calculateActivityCompletionPercentage(activity, SECONDS_IN_HOUR * 1)).toBe(HUNDRED_PERCENT)
})
