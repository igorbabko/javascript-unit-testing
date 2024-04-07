import { expect, it } from 'vitest'
import { formatSeconds, formatSecondsWithSign } from '../src/functions'

it('formats seconds', () => {
  // const formattedSeconds = formatSeconds(0);

  // console.log(formatSeconds(27 * 60 * 60))

  expect(formatSeconds(0)).toBe('00:00:00')
  expect(formatSeconds(60)).toBe('00:01:00')
  expect(formatSeconds(180)).toBe('00:03:00')
  expect(formatSeconds(30 * 60)).toBe('00:30:00')
  expect(formatSeconds(30 * 60)).toBe('00:30:00')
  expect(formatSeconds(60 * 60)).toBe('01:00:00')
  expect(formatSeconds(24 * 60 * 60)).toBe('00:00:00')

  // expect(2).toBe(2)
  // expect(Math.sqrt(144)).toBe(12)
  // expect(Math.sqrt(2)).toBe(Math.SQRT2)
})

it('formats seconds with sign', () => {
  // vi.spyOn(formatSeconds).mockReturnValue('11111111')

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

// test('Squared', () => {
//   expect(squared(2)).toBe(4)
//   expect(squared(12)).toBe(144)
// })

// test('JSON', () => {
//   const input = {
//     foo: 'hello',
//     bar: 'world',
//   }

//   const output = JSON.stringify(input)

//   expect(output).eq('{"foo":"hello","bar":"world"}')
//   assert.deepEqual(JSON.parse(output), input, 'matches original')
// })
