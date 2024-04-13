import { expect, it } from 'vitest'
import { formatSeconds, formatSecondsWithSign, normalizeSelectValue } from '../src/functions'

it('formats seconds with sign', () => {
  expect(formatSecondsWithSign(0)).toBe('+00:00:00')
  expect(formatSecondsWithSign(60)).toBe('+00:01:00')
  expect(formatSecondsWithSign(180)).toBe('+00:03:00')
  expect(formatSecondsWithSign(1800)).toBe('+00:30:00')
  expect(formatSecondsWithSign(3600)).toBe('+01:00:00')
  expect(formatSecondsWithSign(60 * 60 * 24)).toBe('+00:00:00')

  expect(formatSecondsWithSign(-0)).toBe('+00:00:00')
  expect(formatSecondsWithSign(-60)).toBe('-00:01:00')
  expect(formatSecondsWithSign(-180)).toBe('-00:03:00')
  expect(formatSecondsWithSign(-1800)).toBe('-00:30:00')
  expect(formatSecondsWithSign(-3600)).toBe('-01:00:00')
  expect(formatSecondsWithSign(-60 * 60 * 24)).toBe('-00:00:00')
})

it('formats seconds', () => {
  expect(formatSeconds(0)).toBe('00:00:00')
  expect(formatSeconds(60)).toBe('00:01:00')
  expect(formatSeconds(180)).toBe('00:03:00')
  expect(formatSeconds(1800)).toBe('00:30:00')
  expect(formatSeconds(3600)).toBe('01:00:00')
  expect(formatSeconds(60 * 60 * 24)).toBe('00:00:00')
})

it('normalizes select value', () => {
  expect(normalizeSelectValue('random-string')).toBe('random-string')
  expect(normalizeSelectValue(null)).toBe(null)
  expect(normalizeSelectValue('1')).toBe(1)
})

it.todo('gets progress color class')
it.todo('generates id')
