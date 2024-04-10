import { expect, it } from 'vitest'
import {
  activities,
  calculateActivityCompletionPercentage,
  initializeActivities,
  updateActivity
} from '../src/activities'
import { Activity } from '../src/types'

it('updates activity', () => {
  const activity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: 3600
  }

  const updatedActivity: Activity = {
    id: '2',
    name: 'Programming',
    secondsToComplete: 7200
  }

  initializeActivities({
    timelineItems: [],
    activities: [activity],
    lastActiveAt: new Date()
  })

  updateActivity(activity, updatedActivity)

  expect(activities.value).toHaveLength(1)
  expect(activities.value).toContainEqual(updatedActivity)

  // expect(activities.value[0]).toHaveProperty('id', '2')
  // expect(activities.value[0]).toHaveProperty('name', 'Programming')
  // expect(activities.value[0]).toHaveProperty('secondsToComplete', 7200)
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
