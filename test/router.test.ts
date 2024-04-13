// @vitest-environment happy-dom

import { expect, it } from 'vitest'
import { normalizePageHash } from '../src/router'
import { PageName } from '../src/types'

it('normalizes valid page hash', () => {
  Object.values(PageName).forEach((page) => {
    window.location.hash = page

    expect(normalizePageHash()).toBe(page)
    expect(window.location.hash).toBe(`#${page}`)
  })
})

it('normalizes invalid page hash', () => {
  window.location.hash = 'invalid'

  expect(normalizePageHash()).toBe(PageName.TIMELINE)
  expect(window.location.hash).toBe(`#${PageName.TIMELINE}`)
})
