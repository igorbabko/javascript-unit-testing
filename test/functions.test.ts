import { expect, it } from 'vitest'
import { formatSeconds } from '../src/functions'

it.todo('formats seconds with sign')

it('formats seconds', () => {
  expect(formatSeconds(0)).toBe('00:00:00')
  expect(formatSeconds(60)).toBe('00:01:00')
  expect(formatSeconds(180)).toBe('00:03:00')
  expect(formatSeconds(1800)).toBe('00:30:00')
  expect(formatSeconds(3600)).toBe('01:00:00')
  expect(formatSeconds(60 * 60 * 24)).toBe('00:00:00')
})

it.todo('normalizes select value')
it.todo('gets progress color class')
it.todo('generates id')
