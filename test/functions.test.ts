import { expect, it, vi } from 'vitest'
import { HUNDRED_PERCENT, LOW_PERCENT, MEDIUM_PERCENT } from '../src/constants'
import {
  formatSeconds,
  formatSecondsWithSign,
  getProgressColorClass,
  id,
  normalizeSelectValue
} from '../src/functions'
import { ProgressColorClass } from '../src/types'

it('formats seconds', () => {
  expect(formatSeconds(0)).toBe('00:00:00')
  expect(formatSeconds(60)).toBe('00:01:00')
  expect(formatSeconds(180)).toBe('00:03:00')
  expect(formatSeconds(30 * 60)).toBe('00:30:00')
  expect(formatSeconds(30 * 60)).toBe('00:30:00')
  expect(formatSeconds(60 * 60)).toBe('01:00:00')
  expect(formatSeconds(24 * 60 * 60)).toBe('00:00:00')
})

it('formats seconds with sign', () => {
  expect(formatSecondsWithSign(0)).toBe('+00:00:00')
  expect(formatSecondsWithSign(60)).toBe('+00:01:00')
  expect(formatSecondsWithSign(180)).toBe('+00:03:00')
  expect(formatSecondsWithSign(30 * 60)).toBe('+00:30:00')
  expect(formatSecondsWithSign(30 * 60)).toBe('+00:30:00')
  expect(formatSecondsWithSign(60 * 60)).toBe('+01:00:00')
  expect(formatSecondsWithSign(24 * 60 * 60)).toBe('+00:00:00')

  expect(formatSecondsWithSign(-0)).toBe('+00:00:00')
  expect(formatSecondsWithSign(-60)).toBe('-00:01:00')
  expect(formatSecondsWithSign(-180)).toBe('-00:03:00')
  expect(formatSecondsWithSign(-30 * 60)).toBe('-00:30:00')
  expect(formatSecondsWithSign(-30 * 60)).toBe('-00:30:00')
  expect(formatSecondsWithSign(-60 * 60)).toBe('-01:00:00')
  expect(formatSecondsWithSign(-24 * 60 * 60)).toBe('-00:00:00')
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

it('generates random id', () => {
  vi.spyOn(Date, 'now').mockReturnValueOnce(1)
  vi.spyOn(Math, 'random').mockReturnValueOnce(10000)

  expect(id()).toBe('1s')
})
