import { expect, it } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../src/activities'
import { Activity } from '../src/types'

it('updates activity', () => {
  const activity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: 3600
  }
  const updatedFields: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: 7200
  }

  const updatedActivity = updateActivity(activity, updatedFields)

  expect(activity).toEqual(updatedFields)
  expect(updatedActivity).toEqual(updatedFields)
})

it('calculates activity completion percentage', () => {
  const activity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: 3600
  }

  expect(calculateActivityCompletionPercentage(activity, 0)).toBe(0)
  expect(calculateActivityCompletionPercentage(activity, 1800)).toBe(50)
  expect(calculateActivityCompletionPercentage(activity, 3600)).toBe(100)
})
