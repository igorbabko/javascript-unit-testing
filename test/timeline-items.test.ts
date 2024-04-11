import { expect, it, vi } from 'vitest'
import { resetTimelineItemActivities, updateTimelineItem } from '../src/timeline-items'
import { Activity, Hour, TimelineItem } from '../src/types'

it('updates timeline item', () => {
  const timelineItem: TimelineItem = {
    hour: 1,
    activityId: '1',
    activitySeconds: 0,
    isActive: false
  }

  const updatedTimelineItem: TimelineItem = {
    hour: 2,
    activityId: '2',
    activitySeconds: 3600,
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
      activityId: codingActivity.id,
      activitySeconds: 1800,
      isActive: false
    },
    {
      hour: date.getHours() as Hour,
      activityId: codingActivity.id,
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

  resetTimelineItemActivities(timelineItems, codingActivity)

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
})
