import * as React from 'react';
import Dialog from '../src';

const style = {
  color: 'red',
};
const noop = () => null;

export default (
  <>
    <Dialog />
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
    </Dialog>
  </>
);
