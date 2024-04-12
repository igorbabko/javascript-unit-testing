import { expect, it, vi } from 'vitest'
import {
  HUNDRED_PERCENT,
  LOW_PERCENT,
  MEDIUM_PERCENT,
  MINUTES_IN_HOUR,
  SECONDS_IN_MINUTE
} from '../src/constants'
import {
  formatSeconds,
  formatSecondsWithSign,
  getProgressColorClass,
  id,
  normalizeSelectValue
} from '../src/functions'
import { ProgressColorClass } from '../src/types'

it('formats seconds', () => {
  expect(formatSeconds(0 * SECONDS_IN_MINUTE)).toBe('00:00:00')
  expect(formatSeconds(1 * SECONDS_IN_MINUTE)).toBe('00:01:00')
  expect(formatSeconds(3 * SECONDS_IN_MINUTE)).toBe('00:03:00')
  expect(formatSeconds(30 * SECONDS_IN_MINUTE)).toBe('00:30:00')
  expect(formatSeconds(60 * SECONDS_IN_MINUTE)).toBe('01:00:00')
  expect(formatSeconds(24 * MINUTES_IN_HOUR * SECONDS_IN_MINUTE)).toBe('00:00:00')
})

it('formats seconds with sign', () => {
  expect(formatSecondsWithSign(0 * SECONDS_IN_MINUTE)).toBe('+00:00:00')
  expect(formatSecondsWithSign(1 * SECONDS_IN_MINUTE)).toBe('+00:01:00')
  expect(formatSecondsWithSign(3 * SECONDS_IN_MINUTE)).toBe('+00:03:00')
  expect(formatSecondsWithSign(30 * SECONDS_IN_MINUTE)).toBe('+00:30:00')
  expect(formatSecondsWithSign(60 * SECONDS_IN_MINUTE)).toBe('+01:00:00')
  expect(formatSecondsWithSign(24 * MINUTES_IN_HOUR * SECONDS_IN_MINUTE)).toBe('+00:00:00')

  expect(formatSecondsWithSign(-0 * SECONDS_IN_MINUTE)).toBe('+00:00:00')
  expect(formatSecondsWithSign(-1 * SECONDS_IN_MINUTE)).toBe('-00:01:00')
  expect(formatSecondsWithSign(-3 * SECONDS_IN_MINUTE)).toBe('-00:03:00')
  expect(formatSecondsWithSign(-30 * SECONDS_IN_MINUTE)).toBe('-00:30:00')
  expect(formatSecondsWithSign(-60 * SECONDS_IN_MINUTE)).toBe('-01:00:00')
  expect(formatSecondsWithSign(-24 * MINUTES_IN_HOUR * SECONDS_IN_MINUTE)).toBe('-00:00:00')
})

it('normalizes select value', () => {
  expect(normalizeSelectValue('random-string')).toBe('random-string')
  expect(normalizeSelectValue(null)).toBe(null)
  expect(normalizeSelectValue('1')).toBe(1)
})

it('gets progress color class', () => {
  expect(getProgressColorClass(0)).toBe(ProgressColorClass.RED)
  expect(getProgressColorClass(LOW_PERCENT - 1)).toBe(ProgressColorClass.RED)
  expect(getProgressColorClass(MEDIUM_PERCENT - 1)).toBe(ProgressColorClass.YELLOW)
  expect(getProgressColorClass(HUNDRED_PERCENT - 1)).toBe(ProgressColorClass.BLUE)
  expect(getProgressColorClass(HUNDRED_PERCENT)).toBe(ProgressColorClass.GREEN)
})

it('generates id', () => {
  vi.spyOn(Date, 'now').mockReturnValueOnce(1)
  vi.spyOn(Math, 'random').mockReturnValueOnce(10000)

  expect(id()).toBe('1s')
})
