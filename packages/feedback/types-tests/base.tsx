import * as React from 'react';
import TouchFeedback from '../src';

export default (
  <>
    <TouchFeedback>
      <div>111</div>
    </TouchFeedback>
    <TouchFeedback
      disabled
      activeClassName="active"
      activeStyle={{ width: 100 }}
    >
      <div>111</div>
    </TouchFeedback>
  </>
);
