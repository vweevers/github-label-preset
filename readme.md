# github label preset

**A preset for GitHub labels. Not quite there yet, trying this out for a while. Adapted from [A Styleguide For Tagging][4], these labels are suited for both modules and applications.**

For applications, it is recommended to manage product flow on a [Project Board][5], and *not* to use the `qa`, `beta` or `release` labels. This way labels describe issue type or *unforeseen* status, while the horizontal timeline of a project board describes the *mandatory* stages that each issue goes through before public release.

## interactive guide

[![labels][1]][6]

## apply to your repository

1) Install [github-label-sync][2] (>= 1.2.1) with [npm][7]:

```
npm i -g github-label-sync
```

2) Clone:

```
git clone git@github.com:vweevers/github-label-preset.git
cd github-label-preset
```

3) Create a [personal access token](https://github.com/settings/tokens) with the `repo` scope.

4) Apply the labels to your repo:

```
github-label-sync -a <TOKEN> -l labels.js [--dry-run] <ORG/REPO>
```

**Warning! This utility can remove existing labels. Please be careful and always do a `--dry-run` first.** If you don't want to delete existing labels, add `--allow-added-labels`.

## wishlist

- Add npm-installable presets to `github-label-sync`: `-l <module>`
- Perhaps publish presets to an npm scope, something like `@gh-labels`
- Support multiple presets: `-l @gh-labels/duration-time -l @gh-labels/semver-long`
- Require `--force` flag for destructive operations
- Exclude certain labels from deletion

## license

[MIT](http://opensource.org/licenses/MIT) © Vincent Weevers

[1]: labels.png
[2]: https://github.com/Financial-Times/github-label-sync
[3]: https://github.com/Financial-Times/github-label-sync/issues/4
[4]: https://robinpowered.com/blog/best-practice-system-for-organizing-and-tagging-github-issues/
[5]: https://help.github.com/articles/about-project-boards/
[6]: https://cdn.rawgit.com/vweevers/github-label-preset/master/labels.html
[7]: https://npmjs.org
