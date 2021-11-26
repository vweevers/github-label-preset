# github-label-preset

**Preset for GitHub labels.**  

[![npm status](http://img.shields.io/npm/v/github-label-preset.svg)](https://www.npmjs.org/package/github-label-preset)
[![node](https://img.shields.io/node/v/github-label-preset.svg)](https://www.npmjs.org/package/github-label-preset)
![Test](https://github.com/vweevers/github-label-preset/workflows/Test/badge.svg?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Labels

![problem-bug](svg/problem-bug.svg) ![problem-security](svg/problem-security.svg)

![discussion-question](svg/discussion-question.svg) ![discussion-discussion](svg/discussion-discussion.svg) ![discussion-poll](svg/discussion-poll.svg)

![add-enhancement](svg/add-enhancement.svg) ![add-test](svg/add-test.svg) ![add-benchmark](svg/add-benchmark.svg)

![semver-semver-major](svg/semver-semver-major.svg) ![semver-semver-minor](svg/semver-semver-minor.svg) ![semver-semver-patch](svg/semver-semver-patch.svg)

![help-wanted-good-first-issue](svg/help-wanted-good-first-issue.svg) ![help-wanted-help-wanted](svg/help-wanted-help-wanted.svg) ![help-wanted-pull-request-welcome](svg/help-wanted-pull-request-welcome.svg)

![help-wanted-more-information-needed](svg/help-wanted-more-information-needed.svg)

![documentation-documentation](svg/documentation-documentation.svg) ![documentation-upgrade-guide](svg/documentation-upgrade-guide.svg) ![documentation-changelog](svg/documentation-changelog.svg)

![maintenance-maintenance](svg/maintenance-maintenance.svg) ![maintenance-dependencies](svg/maintenance-dependencies.svg)

![cleanup-refactor](svg/cleanup-refactor.svg) ![cleanup-cleanup](svg/cleanup-cleanup.svg)

![priority-critical](svg/priority-critical.svg) ![priority-blocked](svg/priority-blocked.svg)

![inactive-invalid](svg/inactive-invalid.svg) ![inactive-duplicate](svg/inactive-duplicate.svg) ![inactive-stale](svg/inactive-stale.svg)

![inactive-wontfix](svg/inactive-wontfix.svg) ![inactive-false-positive](svg/inactive-false-positive.svg)

## How to use

Apply the preset to many repositories at once with [`attend`](https://github.com/vweevers/attend) (alpha) or to a single repository with `github-label-sync`.

### With `github-label-sync`

1\) Install [github-label-sync](https://github.com/Financial-Times/github-label-sync) (>= 1.3.0) globally with [npm](https://npmjs.org):

```
npm i -g github-label-sync
```

2\) Create a [personal access token](https://github.com/settings/tokens) with the `repo` scope.

3\) Apply the labels to your repo:

```
github-label-sync -a <TOKEN> -l https://raw.githubusercontent.com/vweevers/github-label-preset/master/labels.json [--dry-run] <ORG/REPO>
```

**Warning! This utility can remove existing labels. Be careful and do a `--dry-run` first.** If you don't want to delete existing labels, add `--allow-added-labels`.

## License

[MIT](LICENSE)
