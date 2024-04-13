import { expect, it, vi } from 'vitest'
import { today } from '../src/time'

it('gets current date', () => {
  const dateA = new Date('1990-01-01')
  const dateB = new Date('2024-03-08')
  const dateC = new Date('2030-05-12')

  vi.setSystemTime(dateA)

  expect(today()).toEqual(dateA)

  vi.setSystemTime(dateB)

  expect(today()).toEqual(dateB)

  vi.setSystemTime(dateC)

  expect(today()).toEqual(dateC)

  vi.useRealTimers()

  // await new Promise((resolve) => setTimeout(() => resolve(null), 1000))
})

it.todo('gets date of tomorrow')
it.todo('gets end of hour date')
it.todo('checks if passed date is today')
it.todo('converts milliseconds to seconds')
