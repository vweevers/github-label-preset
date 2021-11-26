'use strict'

const groups = {
  problem: {
    color: 'd73a4a',
    invert: true,
    labels: [
      {
        name: 'bug',
        aliases: ['type: bug'],
        description: 'Something isn\'t working'
      },
      {
        name: 'security',
        aliases: [],
        description: 'Vulnerabilities and other security-related matters'
      }
    ]
  },
  discussion: {
    color: '5319e7',
    invert: true,
    labels: [
      {
        name: 'question',
        aliases: ['type: question'],
        description: 'Support or open question(s)'
      },
      {
        name: 'discussion',
        aliases: ['type: discussion'],
        description: 'Discussion'
      },
      {
        name: 'poll',
        aliases: ['type: poll'],
        description: 'Poll'
      }
    ]
  },
  add: {
    color: '84d3f6',
    labels: [
      {
        name: 'enhancement',
        aliases: ['type: enhancement', 'feature'],
        description: 'New feature or request'
      },
      {
        name: 'test',
        aliases: ['type: test'],
        description: 'Improvements or additions to tests'
      },
      {
        name: 'benchmark',
        aliases: [],
        description: 'Requires or pertains to benchmarking'
      }
    ]
  },
  semver: {
    color: 'ffc762',
    labels: [
      {
        name: 'semver-major',
        aliases: ['semver:major', 'type: breaking', 'breaking'],
        description: 'Changes that break backward compatibility'
      },
      {
        name: 'semver-minor',
        aliases: ['semver:minor'],
        description: 'New features that are backward compatible'
      },
      {
        name: 'semver-patch',
        aliases: ['semver:patch'],
        description: 'Bug fixes that are backward compatible'
      }
    ]
  },
  help_wanted: {
    color: '8e57e4',
    invert: true,
    labels: [
      {
        name: 'good first issue',
        aliases: ['status: good starter issue', 'good-starter-issue'],
        description: 'Good for newcomers'
      },
      {
        name: 'help wanted',
        aliases: ['status: help wanted'],
        description: 'Extra attention is needed'
      },
      {
        name: 'pull request welcome',
        aliases: ['status: pull request welcome', 'pr-welcome', 'pr welcome'],
        description: 'A pull request is welcome'
      },
      {
        name: 'more information needed',
        aliases: [],
        description: 'Further information is requested'
      }
    ]
  },
  documentation: {
    color: '0e8a16',
    invert: true,
    labels: [
      {
        name: 'documentation',
        aliases: ['type: documentation', 'doc', 'docs'],
        description: 'Improvements or additions to documentation'
      },
      {
        name: 'upgrade guide',
        aliases: ['upgrading.md'],
        description: 'Improvements or additions to upgrade guide(s)'
      },
      {
        name: 'changelog',
        aliases: ['changelog.md'],
        description: 'Improvements or additions to changelog'
      }
    ]
  },
  maintenance: {
    color: '1d76db',
    invert: true,
    labels: [
      {
        name: 'maintenance',
        aliases: ['type: maintenance'],
        description: 'General maintenance'
      },
      {
        name: 'dependencies',
        aliases: ['dependabot', 'greenkeeper'],
        description: 'Pull requests that update a dependency file'
      }
      // {
      //   name: 'greenkeeper',
      //   aliases: [],
      //   description: 'Legacy Greenkeeper'
      // }
    ]
  },
  // ecosystem: {
  //   color: '000000',
  //   invert: true,
  //   labels: [
  //     {
  //       name: 'npm',
  //       aliases: [],
  //       description: 'Pull requests that update npm dependencies'
  //     },
  //     {
  //       name: 'github_actions',
  //       aliases: [],
  //       description: 'Pull requests that update Github Actions code'
  //     },
  //     {
  //       name: 'submodules',
  //       aliases: [],
  //       description: 'Pull requests that update git submodules'
  //     }
  //   ]
  // },
  cleanup: {
    color: 'f6b9d4',
    labels: [
      {
        name: 'refactor',
        aliases: [],
        description: 'Requires or pertains to refactoring'
      },
      {
        name: 'cleanup',
        aliases: [],
        description: 'Housekeeping'
      }
    ]
  },
  priority: {
    color: '292f36',
    invert: true,
    labels: [
      {
        name: 'critical',
        aliases: [],
        description: 'Urgent matter(s)'
      },
      {
        name: 'blocked',
        aliases: ['status: blocked'],
        description: 'Unable to proceed with this issue or pull request'
      }
    ]
  },
  inactive: {
    color: 'efefef',
    labels: [
      {
        name: 'invalid',
        aliases: [],
        description: 'This doesn\'t seem right'
      },
      {
        name: 'duplicate',
        aliases: ['status: duplicate'],
        description: 'This issue or pull request already exists'
      },
      {
        name: 'stale',
        aliases: ['status: stale'],
        description: 'This issue or pull request is old'
      },
      {
        name: 'wontfix',
        aliases: ['status: wontfix', 'wont-fix'],
        description: 'This will not be worked on'
      },
      {
        name: 'false positive',
        aliases: [],
        description: 'Not an issue'
      }
    ]
  }
}

module.exports = []
module.exports.groups = groups

for (const k in groups) {
  const group = groups[k]

  for (const label of group.labels) {
    label.color = group.color
    label.invert = !!group.invert

    module.exports.push(label)
  }
}
