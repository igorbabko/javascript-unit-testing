import { expect, it, beforeEach } from 'vitest'
import { activities, createActivity, initializeActivities } from '../src/activities'
import { Activity } from '../src/types'

beforeEach(() => {
  activities.value = []
})

it('initializes activities', () => {
  const codingActivity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: 7200
  }

  const readingActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: 3600
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
  const codingActivity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: 7200
  }

  createActivity(codingActivity)

  expect(activities.value).toHaveLength(1)
  expect(activities.value).toContainEqual(codingActivity)
})
