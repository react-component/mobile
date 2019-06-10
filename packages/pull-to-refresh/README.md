# rmc-pull-to-refresh

---

React Mobile PullToRefresh Component.

[![NPM version][npm-image]][npm-url]

[npm-image]: http://img.shields.io/npm/v/@antd-mobile/pull-to-refresh.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@antd-mobile/pull-to-refresh
[download-image]: https://img.shields.io/npm/dm/@antd-mobile/pull-to-refresh.svg?style=flat-square
[download-url]: https://npmjs.org/package/@antd-mobile/pull-to-refresh

## Screenshots

<img src="https://os.alipayobjects.com/rmsportal/rcLuiqtnDULPyzG.gif" width="288"/>

## API

### props

| name              | description                                             | type       | default                                                                             |
| ----------------- | ------------------------------------------------------- | ---------- | ----------------------------------------------------------------------------------- |
| direction         | pull direction, can be `up` or `down`                   | String     | `down`                                                                              |
| distanceToRefresh | distance to pull to refresh                             | number     | 50                                                                                  |
| refreshing        | Whether the view should be indicating an active refresh | bool       | false                                                                               |
| onRefresh         | Called when the view starts refreshing.                 | () => void | -                                                                                   |
| indicator         | indicator config                                        | Object     | `{ activate: 'release', deactivate: 'pull', release: 'loading', finish: 'finish' }` |
| className         | additional css class of root dom node                   | String     | -                                                                                   |
| prefixCls         | prefix class                                            | String     | 'rmc-pull-to-refresh'                                                               |
| damping           | pull damping, suggest less than 200                     | number     | 100                                                                                 |
