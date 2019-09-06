# github-label-preset

> **A preset for GitHub labels.**  
> Not perfect; driven by necessity.

## Labels

![problem-bug](svg/problem-bug.svg)
![problem-security](svg/problem-security.svg)

![discussion-discussion](svg/discussion-discussion.svg)

![poll-poll](svg/poll-poll.svg)

![question-question](svg/question-question.svg)

![add-enhancement](svg/add-enhancement.svg)
![add-test](svg/add-test.svg)
![add-benchmark](svg/add-benchmark.svg)

![semver-semver-major](svg/semver-semver-major.svg)
![semver-semver-minor](svg/semver-semver-minor.svg)
![semver-semver-patch](svg/semver-semver-patch.svg)

![help-wanted-good-first-issue](svg/help-wanted-good-first-issue.svg)
![help-wanted-help-wanted](svg/help-wanted-help-wanted.svg)

![info-needed-more-information-needed](svg/info-needed-more-information-needed.svg)

![maintenance-maintenance](svg/maintenance-maintenance.svg)
![maintenance-greenkeeper](svg/maintenance-greenkeeper.svg)

![cleanup-refactor](svg/cleanup-refactor.svg)
![cleanup-cleanup](svg/cleanup-cleanup.svg)

![documentation-documentation](svg/documentation-documentation.svg)
![documentation-upgrade-guide](svg/documentation-upgrade-guide.svg)

![priority-critical](svg/priority-critical.svg)
![priority-blocked](svg/priority-blocked.svg)

![inactive-invalid](svg/inactive-invalid.svg)
![inactive-duplicate](svg/inactive-duplicate.svg)
![inactive-stale](svg/inactive-stale.svg)
![inactive-wontfix](svg/inactive-wontfix.svg)
![inactive-false-positive](svg/inactive-false-positive.svg)

## Apply to your repository

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

## Wishlist

- Add npm-installable presets to `github-label-sync`: `-l <module>`
- Perhaps publish presets to an npm scope, something like `@gh-labels`
- Support multiple presets: `-l @gh-labels/semver -l @gh-labels/platform`
- Require `--force` flag for destructive operations
- Exclude certain labels from deletion

## License

[MIT](LICENSE) © 2017-present Vincent Weevers
