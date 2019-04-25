'use strict'

module.exports = []

const groups = {
  problem: {
    color: 'd73a4a',
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
    labels: [
      { name: 'poll', aliases: [] }
    ]
  },
  question: {
    color: 'cc317c',
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
    labels: [
      { name: 'documentation', aliases: ['doc', 'docs'] },
      { name: 'upgrade guide', aliases: ['upgrading.md'] }
    ]
  },
  priority: {
    color: '292f36',
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
      { name: 'wontfix', aliases: [] }
    ]
  }
}

for(let k in groups) {
  const group = groups[k]

  group.labels.forEach(label => {
    label.color = group.color
    module.exports.push(label)
  })
}
