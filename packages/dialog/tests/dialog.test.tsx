import * as React from 'react';
import { render } from 'enzyme';
import { html } from 'cheerio';
import Dialog from '../src';

describe('basic', () => {
  // Invariant Violation: Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.
  it.skip('base.', () => {
    const style = {
      color: 'red',
    };
    const noop = () => null;
    const wrapper = render(
      <Dialog
        className="al"
        style={style}
        mask
        afterClose={noop}
        onClose={e => null}
        closable
        maskClosable
        visible
        title={<div />}
        footer={<div />}
        transitionName=""
        maskTransitionName=""
        wrapStyle={style}
        bodyStyle={style}
        maskStyle={style}
        prefixCls=""
        wrapClassName=""
        onAnimateLeave={noop}
        zIndex={1}
      >
        <div>111</div>
      </Dialog>,
    );
    expect(html(wrapper)).toMatchSnapshot();
  });
});

// TODO: 待补充这个复杂的测试
// https://github.com/react-component/m-dialog/blob/master/tests/index.js
