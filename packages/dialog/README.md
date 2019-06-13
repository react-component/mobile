# @antd-mobile/dialog

---

react dialog component for mobile

[![NPM version][npm-image]][npm-url]

[npm-image]: http://img.shields.io/npm/v/@antd-mobile/dialog.svg?style=flat-square
[npm-url]: http://npmjs.org/package/@antd-mobile/dialog
[download-image]: https://img.shields.io/npm/dm/@antd-mobile/dialog.svg?style=flat-square
[download-url]: https://npmjs.org/package/@antd-mobile/dialog

## Screenshot

<img src="http://gtms04.alicdn.com/tps/i4/TB1dp5lHXXXXXbmXpXXyVug.FXX-664-480.png" />

## API

### props

| name               | description                                         | type          | default       |
| ------------------ | --------------------------------------------------- | ------------- | ------------- |
| prefixCls          | The dialog dom node's prefixCls                     | String        | `rmc-dialog`  |
| className          | additional className for dialog                     | String        |               |
| wrapClassName      | additional className for dialog wrap                | String        |               |
| style              | Root style for dialog element.Such as width, height | Object        | {}            |
| zIndex             | z-index                                             | Number        |               |
| bodyStyle          | body style for dialog body element.Such as height   | Object        | {}            |
| maskStyle          | style for mask element.                             | Object        | {}            |
| visible            | current dialog's visible status                     | Boolean       | false         |
| animation          | part of dialog animation css class name             | String        |               |
| maskAnimation      | part of dialog's mask animation css class name      | String        |               |
| transitionName     | dialog animation css class name                     | String        |               |
| maskTransitionName | mask animation css class name                       | String        |               |
| title              | Title of the dialog                                 | String        | React.Element |  |
| footer             | footer of the dialog                                | React.Element |               |
| closable           | whether show close button                           | Boolean       | true          |
| mask               | whether show mask                                   | Boolean       | true          |
| maskClosable       | whether click mask to close                         | Boolean       | true          |
| onClose            | called when click close button or mask              | function      |               |
