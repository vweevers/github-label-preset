'use strict'

module.exports = []

const groups = {
  problem: {
    color: 'ee3f46', // Original GH color: ee0701
    labels: [
      { name: 'bug', aliases: [] },
      { name: 'security', aliases: [] },
      { name: 'regression', aliases: [] }
    ]
  },
  experience: {
    color: 'ffc274',
    labels: [
      { name: 'copy', aliases: [] },
      { name: 'design', aliases: [] },
      { name: 'ux', aliases: [] }
    ]
  },
  feedback: {
    color: 'cc317c',
    labels: [
      { name: 'discussion', aliases: ['rfc'] },
      { name: 'question', aliases: [] },
      { name: 'agenda', aliases: [] }
    ]
  },
  change: {
    color: '5ebeff',
    labels: [
      { name: 'enhancement', aliases: [] },
      { name: 'optimization', aliases: [] },
      { name: 'scaling', aliases: [] }
    ]
  },
  semver: {
    color: '91ca55',
    labels: [
      { name: 'major', aliases: ['breaking', 'semver-major', 'semver:major', 'semver major'] },
      { name: 'minor', aliases: ['semver-minor', 'semver:minor', 'semver minor'] },
      { name: 'patch', aliases: ['semver-patch', 'semver:patch', 'semver patch'] }
    ]
  },
  pending: {
    color: 'fbca04',
    labels: [
      { name: 'blocked', aliases: [] },
      { name: 'in progress', aliases: ['progress', 'in-progress'] },
      { name: 'help wanted', aliases: ['help'] }
    ]
  },
  priority: {
    color: '000000',
    labels: [
      { name: 'blocker', aliases: [] },
      { name: 'critical', aliases: ['priority', 'important'] },
      { name: 'production', aliases: ['prod', 'in-production', 'in production'] }
    ]
  },
  inactive: {
    color: 'd2dae1',
    labels: [
      { name: 'invalid', aliases: [] },
      { name: 'wontfix', aliases: ['wont-fix', 'wont fix'] },
      { name: 'duplicate', aliases: [] }
    ]
  },
  platform: {
    color: 'bfd4f2',
    labels: [
      { name: 'backend', aliases: [] },
      { name: 'frontend', aliases: [] },
      { name: 'infra', aliases: ['infrastructure'] },
      { name: 'intelligence', aliases: ['logs', 'analytics', 'bi', 'monitoring'] },
      { name: 'marketing', aliases: [] }
    ]
  },
  mindless: {
    color: 'fef2c0',
    labels: [
      { name: 'chore', aliases: ['mindless'] },
      { name: 'docs', aliases: ['doc', 'documentation', 'prd'] },
      { name: 'refactor', aliases: ['refactoring'] },
      { name: 'legal', aliases: [] },
      { name: 'translation', aliases: ['l18n', 'translate'] }
    ]
  },
  stage: {
    color: 'fad8c7',
    labels: [
      { name: 'support', aliases: [] },
      { name: 'test', aliases: [] },
      { name: 'qa', aliases: ['waiting for qa', 'waiting on qa', 'ready for qa'] },
      { name: 'beta', aliases: ['upload to beta'] },
      { name: 'release', aliases: ['deployment'] }
    ]
  },
  duration: {
    color: 'ffffff',
    labels: [
      { name: 'XS', aliases: [] },
      { name: 'S', aliases: [] },
      { name: 'M', aliases: [] },
      { name: 'L', aliases: [] },
      { name: 'XL', aliases: [] }
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
