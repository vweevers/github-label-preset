'use strict'

const groups = {
  problem: {
    color: 'd73a4a',
    invert: true,
    labels: [
      { name: 'bug', aliases: [] },
      { name: 'security', aliases: [] }
    ]
  },
  discussion: {
    color: '50e09a',
    labels: [
      { name: 'discussion', aliases: [] }
    ]
  },
  poll: {
    color: '5319e7',
    invert: true,
    labels: [
      { name: 'poll', aliases: [] }
    ]
  },
  question: {
    color: 'cc317c',
    invert: true,
    labels: [
      { name: 'question', aliases: [] }
    ]
  },
  add: {
    color: 'a2eeef',
    labels: [
      { name: 'enhancement', aliases: [] },
      { name: 'test', aliases: [] },
      { name: 'benchmark', aliases: [] }
    ]
  },
  semver: {
    color: 'ffbc42',
    labels: [
      { name: 'semver-major', aliases: ['semver:major'] },
      { name: 'semver-minor', aliases: ['semver:minor'] },
      { name: 'semver-patch', aliases: ['semver:patch'] }
    ]
  },
  help_wanted: {
    color: '7057ff',
    invert: true,
    labels: [
      { name: 'good first issue', aliases: [] },
      { name: 'help wanted', aliases: [] }
    ]
  },
  info_needed: {
    color: 'c7bdff',
    labels: [
      { name: 'more information needed', aliases: [] }
    ]
  },
  maintenance: {
    color: '006b75',
    invert: true,
    labels: [
      { name: 'maintenance', aliases: [] },
      { name: 'greenkeeper', aliases: [] }
    ]
  },
  cleanup: {
    color: 'f08cb9',
    labels: [
      { name: 'refactor', aliases: [] },
      { name: 'cleanup', aliases: [] }
    ]
  },
  documentation: {
    color: '0052cc',
    invert: true,
    labels: [
      { name: 'documentation', aliases: ['doc', 'docs'] },
      { name: 'upgrade guide', aliases: ['upgrading.md'] }
    ]
  },
  priority: {
    color: '292f36',
    invert: true,
    labels: [
      { name: 'critical', aliases: [] },
      { name: 'blocked', aliases: [] }
    ]
  },
  inactive: {
    color: 'efefef',
    labels: [
      { name: 'invalid', aliases: [] },
      { name: 'duplicate', aliases: [] },
      { name: 'stale', aliases: [] },
      { name: 'wontfix', aliases: [] },
      { name: 'false positive', aliases: [] }
    ]
  }
}

module.exports = []
module.exports.groups = groups

for(const k in groups) {
  const group = groups[k]

  for (const label of group.labels) {
    label.color = group.color
    label.invert = !!group.invert

    module.exports.push(label)
  }
}
