import { expect, it } from 'vitest'
import { updateTimelineItem } from '../src/timeline-items'
import { TimelineItem } from '../src/types'

it('updates timeline item', () => {
  const timelineItem: TimelineItem = {
    hour: 1,
    activityId: '1',
    activitySeconds: 0,
    isActive: false
  }

  const updatedTimelineItem: TimelineItem = {
    hour: 1,
    activityId: '2',
    activitySeconds: 3600,
    isActive: true
  }

  updateTimelineItem(timelineItem, updatedTimelineItem)

  expect(timelineItem).toEqual(updatedTimelineItem)
})
