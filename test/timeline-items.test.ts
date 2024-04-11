import { expect, it } from 'vitest'
import { updateTimelineItem } from '../src/timeline-items'
import { TimelineItem } from '../src/types'

it.skip('updates timeline item', () => {
  const timelineItem: TimelineItem = {
    id: '1',
    name: 'Coding',
    secondsToComplete: 3600
  }

  const updatedTimelineItem: TimelineItem = {
    id: '2',
    name: 'Programming',
    secondsToComplete: 7200
  }

  updateTimelineItem(timelineItem, updatedTimelineItem)

  expect(timelineItem).toEqual(updatedTimelineItem)
})
