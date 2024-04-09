import { expect, it, beforeEach } from 'vitest'
import {
  activities,
  createActivity,
  deleteActivity,
  initializeActivities,
  updateActivity
} from '../src/activities'
import { Activity } from '../src/types'

beforeEach(() => {
  activities.value = []
})

it('initializes activities', () => {
  const codingActivity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: 3600
  }

  const readingActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: 7200
  }

  initializeActivities({
    timelineItems: [],
    activities: [codingActivity, readingActivity],
    lastActiveAt: new Date()
  })

  expect(activities.value).toEqual([codingActivity, readingActivity])

  // expect(activities.value).toContainEqual(codingActivity)
  // expect(activities.value).toContainEqual(readingActivity)
})

it('creates activity', () => {
  const activity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: 3600
  }

  createActivity(activity)

  expect(activities.value).toHaveLength(1)
  expect(activities.value).toContainEqual(activity)
})

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

it('deletes activity', () => {
  const codingActivity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: 3600
  }

  const readingActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: 7200
  }

  initializeActivities({
    timelineItems: [],
    activities: [codingActivity, readingActivity],
    lastActiveAt: new Date()
  })

  expect(activities.value).toHaveLength(2)

  deleteActivity(readingActivity)

  expect(activities.value).toHaveLength(1)
  expect(activities.value).toContainEqual(codingActivity)
  expect(activities.value).not.toContainEqual(readingActivity)
})
