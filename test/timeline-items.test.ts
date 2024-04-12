import { expect, it, vi } from 'vitest'
import {
  calculateTrackedActivitySeconds,
  resetTimelineItemActivities,
  updateTimelineItem
} from '../src/timeline-items'
import { Activity, Hour, TimelineItem } from '../src/types'
import { MINUTES_IN_HOUR, SECONDS_IN_MINUTE } from '../src/constants'

it('updates timeline item', () => {
  const timelineItem: TimelineItem = {
    hour: 1,
    activityId: '1',
    activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 0,
    isActive: false
  }

  const updatedTimelineItem: TimelineItem = {
    hour: 2,
    activityId: '2',
    activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1,
    isActive: true
  }

  updateTimelineItem(timelineItem, updatedTimelineItem)

  expect(timelineItem).toEqual(updatedTimelineItem)
})

it('resets timeline item activities', () => {
  const date = new Date('2024-04-10T02:00:00')

  vi.setSystemTime(date)

  const codingActivity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1
  }

  const readingActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 2
  }

  const timelineItems: TimelineItem[] = [
    {
      hour: 1,
      activityId: codingActivity.id,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 0.5,
      isActive: false
    },
    {
      hour: date.getHours() as Hour,
      activityId: codingActivity.id,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1,
      isActive: false
    },
    {
      hour: 3,
      activityId: readingActivity.id,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1,
      isActive: true
    }
  ]

  resetTimelineItemActivities(timelineItems, codingActivity)

  expect(timelineItems).toEqual([
    {
      hour: 1,
      activityId: null,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 0,
      isActive: false
    },
    {
      hour: date.getHours(),
      activityId: null,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1,
      isActive: false
    },
    {
      hour: 3,
      activityId: readingActivity.id,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1,
      isActive: true
    }
  ])

  vi.useRealTimers()
})

it('calculates tracked activity seconds', () => {
  const codingActivity: Activity = {
    id: '1',
    name: 'Coding',
    secondsToComplete: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1
  }

  const readingActivity: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 2
  }

  const timelineItems: TimelineItem[] = [
    {
      hour: 1,
      activityId: codingActivity.id,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 0.5,
      isActive: false
    },
    {
      hour: 2,
      activityId: codingActivity.id,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1,
      isActive: false
    },
    {
      hour: 3,
      activityId: readingActivity.id,
      activitySeconds: SECONDS_IN_MINUTE * MINUTES_IN_HOUR * 1,
      isActive: true
    }
  ]

  const trackedCodingActivitySeconds = calculateTrackedActivitySeconds(
    timelineItems,
    codingActivity
  )
  const trackedReadingActivitySeconds = calculateTrackedActivitySeconds(
    timelineItems,
    readingActivity
  )

  expect(trackedCodingActivitySeconds).toEqual(
    timelineItems[0].activitySeconds + timelineItems[1].activitySeconds
  )
  expect(trackedReadingActivitySeconds).toEqual(timelineItems[2].activitySeconds)
})
