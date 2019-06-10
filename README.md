# mobile

ant design mobile components

### Packages

- @antd-mobile/pull-to-refresh

### Develop

1. Checkout from develop branch
2. Create a pull request from `your-branch` to develop
3. If you are block by husky when push to `your-branch`, The `npm run format` may fix it
4. Angular commit message is taken https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-guidelines

### Release

1. Create a pull request(pr) from develop to master
2. Merge the pull request
3. Have a coffee, and the circleci will release automatically
4. Note, after release, the develop branch will also update by bot. You can't merge pull request util the branch develop is up-to-date

### Release alpha

As the Release above, but you need merge develop to alpha branch instead of master

### Doc

You can add examples dir to each package with `*.mdx` as what `pull-to-refresh` done

It will auto update after Release(or Release alpha) by circleci

`npm run doc` can run examples locally

### License

react-component-mobile is released under the MIT license.
