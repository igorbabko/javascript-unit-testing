import { expect, it, vi } from 'vitest'
import { endOfHour, isToday, today, tomorrow } from '../src/time'

it('gets current date', async () => {
  const dateA = new Date('1990-01-01')
  const dateB = new Date('2024-03-08')
  const dateC = new Date('2030-05-14')

  vi.setSystemTime(dateA)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 2000))

  expect(today()).toEqual(dateA)

  vi.setSystemTime(dateB)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 2000))

  expect(today()).toEqual(dateB)

  vi.setSystemTime(dateC)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 2000))

  expect(today()).toEqual(dateC)

  vi.useRealTimers()
})

it('gets date of tomorrow', async () => {
  const dateA = new Date('1990-01-01')
  const tomorrowOfDateA = new Date('1990-01-02')

  const dateB = new Date('2024-03-08')
  const tomorrowOfDateB = new Date('2024-03-09')

  const dateC = new Date('2030-05-14')
  const tomorrowOfDateC = new Date('2030-05-15')

  vi.setSystemTime(dateA)

  expect(tomorrow()).toEqual(tomorrowOfDateA)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 1000))

  vi.setSystemTime(dateB)

  expect(tomorrow()).toEqual(tomorrowOfDateB)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 1000))

  vi.setSystemTime(dateC)

  expect(tomorrow()).toEqual(tomorrowOfDateC)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 1000))

  vi.useRealTimers()
})

it('gets end of hour date', async () => {
  const dateA = new Date('2024-04-10T10:15:00')
  const endOfHourOfDateA = new Date('2024-04-10T11:00:00')

  const dateB = new Date('2024-04-10T20:00:00')
  const endOfHourOfDateB = new Date('2024-04-10T21:00:00')

  const dateC = new Date('2024-04-10T12:59:00')
  const endOfHourOfDateC = new Date('2024-04-10T13:00:00')

  expect(endOfHour(dateA)).toEqual(endOfHourOfDateA)
  expect(endOfHour(dateB)).toEqual(endOfHourOfDateB)
  expect(endOfHour(dateC)).toEqual(endOfHourOfDateC)
})

it('checks if passed date is today', async () => {
  const dateA = new Date('2024-01-01')
  const dateB = new Date('2024-01-02')

  vi.setSystemTime(dateA)

  expect(isToday(dateA)).toBe(true)
  expect(isToday(dateB)).toBe(false)

  vi.setSystemTime(dateB)

  expect(isToday(dateA)).toBe(false)
  expect(isToday(dateB)).toBe(true)
})
