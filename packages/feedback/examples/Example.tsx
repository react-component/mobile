import * as React from 'react';
import TouchFeedback from '../src';

import './index.less';

const Example: React.FunctionComponent = () => (
  <TouchFeedback activeClassName="active" activeStyle={{ color: 'red' }}>
    <div
      className="normal"
      style={{
        color: '#000',
        backgroundColor: 'yellow',
      }}
      onClick={() => console.log('click div')}
    >
      click to active
    </div>
  </TouchFeedback>
);

export default Example;
