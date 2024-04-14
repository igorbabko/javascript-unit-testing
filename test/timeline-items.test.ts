import { expect, it, vi } from 'vitest'
import {
  calculateTrackedActivitySeconds,
  resetTimelineItemActivities,
  updateTimelineItem
} from '../src/timeline-items'
import { Activity, Hour, TimelineItem } from '../src/types'

it('updates timeline item', () => {
  const timelineItem: TimelineItem = {
    hour: 1,
    activityId: '1',
    activitySeconds: 0,
    isActive: false
  }
  const updatedFields: TimelineItem = {
    hour: 2,
    activityId: '2',
    activitySeconds: 3600,
    isActive: true
  }

  const updatedTimelineItem = updateTimelineItem(timelineItem, updatedFields)

  expect(timelineItem).toEqual(updatedFields)
  expect(updatedTimelineItem).toEqual(updatedFields)
})

it('resets timeline item activities', () => {
  const date = new Date('2024-04-10T02:00:00')

  vi.setSystemTime(date)

  const trainingActivity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: 3600
  }
  const readingActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: 7200
  }
  const timelineItems: TimelineItem[] = [
    {
      hour: 1,
      activityId: trainingActivity.id,
      activitySeconds: 1800,
      isActive: false
    },
    {
      hour: date.getHours() as Hour,
      activityId: trainingActivity.id,
      activitySeconds: 3600,
      isActive: false
    },
    {
      hour: 3,
      activityId: readingActivity.id,
      activitySeconds: 3600,
      isActive: true
    }
  ]

  resetTimelineItemActivities(timelineItems, trainingActivity)

  expect(timelineItems).toEqual([
    {
      hour: 1,
      activityId: null,
      activitySeconds: 0,
      isActive: false
    },
    {
      hour: date.getHours(),
      activityId: null,
      activitySeconds: 3600,
      isActive: false
    },
    {
      hour: 3,
      activityId: readingActivity.id,
      activitySeconds: 3600,
      isActive: true
    }
  ])

  vi.useRealTimers()
})

it('calculates tracked activity seconds', () => {
  const trainingActivity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: 3600
  }
  const readingActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: 7200
  }

  const timelineItems: TimelineItem[] = [
    {
      hour: 1,
      activityId: trainingActivity.id,
      activitySeconds: 1800,
      isActive: false
    },
    {
      hour: 2,
      activityId: trainingActivity.id,
      activitySeconds: 3600,
      isActive: false
    },
    {
      hour: 3,
      activityId: readingActivity.id,
      activitySeconds: 3600,
      isActive: true
    }
  ]

  const trackedTrainingActivitySeconds = calculateTrackedActivitySeconds(
    timelineItems,
    trainingActivity
  )
  const trackedReadingActivitySeconds = calculateTrackedActivitySeconds(
    timelineItems,
    readingActivity
  )

  expect(trackedTrainingActivitySeconds).toBe(5400)
  expect(trackedReadingActivitySeconds).toBe(3600)
})
