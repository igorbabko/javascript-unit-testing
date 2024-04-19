import { beforeEach, expect, it, test } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../src/activities'
import { HUNDRED_PERCENT, SECONDS_IN_HOUR } from '../src/constants'
import { Activity } from '../src/types'

let activity: Activity

beforeEach(() => {
  activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: SECONDS_IN_HOUR * 1
  }
})

it('updates activity', () => {
  const updatedFields: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: SECONDS_IN_HOUR * 2
  }

  const updatedActivity = updateActivity(activity, updatedFields)

  expect(activity).toEqual(updatedFields)
  expect(updatedActivity).toEqual(updatedFields)
})

test.each([
  [SECONDS_IN_HOUR * 0, 0],
  [SECONDS_IN_HOUR * 0.5, 50],
  [SECONDS_IN_HOUR * 1, HUNDRED_PERCENT]
])('calculateActivityCompletionPercentage(%i) -> %i', (trackedSeconds, percentage) => {
  expect(calculateActivityCompletionPercentage(activity, trackedSeconds)).toBe(percentage)
})
