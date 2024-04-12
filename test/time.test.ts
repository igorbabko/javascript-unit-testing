import { expect, it, vi } from 'vitest'
import { MILLISECONDS_IN_SECOND } from '../src/constants'
import { endOfHour, isToday, toSeconds, today, tomorrow } from '../src/time'

it('gets current date', () => {
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

it('gets date of tomorrow', () => {
  const dateA = new Date('1990-01-01')
  const tomorrowA = new Date('1990-01-02')

  const dateB = new Date('2024-03-08')
  const tomorrowB = new Date('2024-03-09')

  const dateC = new Date('2030-05-14')
  const tomorrowC = new Date('2030-05-15')

  vi.setSystemTime(dateA)

  expect(tomorrow()).toEqual(tomorrowA)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 1000))

  vi.setSystemTime(dateB)

  expect(tomorrow()).toEqual(tomorrowB)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 1000))

  vi.setSystemTime(dateC)

  expect(tomorrow()).toEqual(tomorrowC)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 1000))

  vi.useRealTimers()
})

it('gets end of hour date', () => {
  const dateA = new Date('2024-04-10T10:15:00')
  const endOfHourA = new Date('2024-04-10T11:00:00')

  const dateB = new Date('2024-04-10T20:00:00')
  const endOfHourB = new Date('2024-04-10T21:00:00')

  const dateC = new Date('2024-04-10T12:59:00')
  const endOfHourC = new Date('2024-04-10T13:00:00')

  expect(endOfHour(dateA)).toEqual(endOfHourA)
  expect(endOfHour(dateB)).toEqual(endOfHourB)
  expect(endOfHour(dateC)).toEqual(endOfHourC)
})

it('checks if passed date is today', () => {
  const dateA = new Date('2024-01-01')
  const dateB = new Date('2024-01-02')

  vi.setSystemTime(dateA)

  expect(isToday(dateA)).toBe(true)
  expect(isToday(dateB)).toBe(false)

  vi.setSystemTime(dateB)

  expect(isToday(dateA)).toBe(false)
  expect(isToday(dateB)).toBe(true)

  vi.useRealTimers()
})

it('converts milliseconds to seconds', () => {
  expect(toSeconds(-10 * MILLISECONDS_IN_SECOND)).toBe(-10)
  expect(toSeconds(-1 * MILLISECONDS_IN_SECOND)).toBe(-1)
  expect(toSeconds(0 * MILLISECONDS_IN_SECOND)).toBe(0)
  expect(toSeconds(+1 * MILLISECONDS_IN_SECOND)).toBe(1)
  expect(toSeconds(+10 * MILLISECONDS_IN_SECOND)).toBe(10)
})
