'use strict'

const test = require('tape')
const preset = require('.')

test('basic', function (t) {
  t.ok(Array.isArray(preset), 'exports an array')
  t.ok(preset.every(isLabel), 'labels are valid')
  t.end()

  function isLabel (label) {
    return (
      label.name &&
      typeof label.name === 'string' &&
      Array.isArray(label.aliases) &&
      label.description &&
      typeof label.description === 'string' &&
      label.color &&
      typeof label.color === 'string'
    )
  }
})
