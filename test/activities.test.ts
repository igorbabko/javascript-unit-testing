import { expect, it } from 'vitest'
import { activities, initializeActivities } from '../src/activities'
import { Activity } from '../src/types'

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
