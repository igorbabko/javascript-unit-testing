import { expect, it, vi } from 'vitest'
import { today, tomorrow } from '../src/time'

it('gets current date', async () => {
  const currentDate = new Date()

  vi.setSystemTime(currentDate)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 2000))

  expect(today()).toEqual(currentDate)

  vi.useRealTimers()
})

it('gets date of tomorrow', async () => {
  const [currentDate, dateOfTomorrow] = [new Date(), new Date()]
  dateOfTomorrow.setDate(currentDate.getDate() + 1)

  vi.setSystemTime(currentDate)

  // await new Promise((resolve) => setTimeout(() => resolve(null), 2000))

  expect(tomorrow()).toEqual(dateOfTomorrow)

  vi.useRealTimers()
})
