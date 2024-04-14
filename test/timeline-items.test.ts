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

it.todo('resets timeline item activities')
it.todo('calculates tracked activity seconds')
