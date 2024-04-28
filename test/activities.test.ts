import { describe, expect, it } from 'vitest'
import { calculateActivityCompletionPercentage, updateActivity } from '../src/activities'
import { HUNDRED_PERCENT, SECONDS_IN_HOUR } from '../src/constants'
import { Activity } from '../src/types'

describe('updateActivity', () => {
  const updatedFields: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: SECONDS_IN_HOUR * 2
  }

  it('updates original activity', () => {
    const activity: Activity = {
      id: '1',
      name: 'Training',
      secondsToComplete: SECONDS_IN_HOUR * 1
    }

    updateActivity(activity, updatedFields)

    expect(activity).toEqual(updatedFields)
  })

  it('returns updated activity', () => {
    const activity: Activity = {
      id: '1',
      name: 'Training',
      secondsToComplete: SECONDS_IN_HOUR * 1
    }

    expect(updateActivity(activity, updatedFields)).toEqual(updatedFields)
  })
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
