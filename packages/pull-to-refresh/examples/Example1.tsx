import * as React from 'react';
import PullToRefresh from '../src';

import './index.less';

const Example1: React.FunctionComponent = props => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [switchContainer, setSwitchContainer] = React.useState(false);

  return (
    <div>
      <button
        style={{ display: 'inline-block', marginBottom: 30, border: 1 }}
        onClick={() => setSwitchContainer(!switchContainer)}
      >
        switchContainer: {switchContainer ? 'true' : 'false'}
      </button>

      {/* todos: 现在如果 getScrollContainer 变化，需要设置新 key 来触发 componentWillUnmount */}
      <PullToRefresh
        key={String(switchContainer)}
        style={{ height: 200, overflow: 'auto', border: '1px solid #ccc' }}
        {...(switchContainer
          ? { getScrollContainer: () => document.body }
          : {})}
        className="forTest"
        direction="down"
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          setTimeout(() => {
            setRefreshing(false);
          }, 1000);
        }}
        indicator={{ deactivate: '下拉' }}
        damping={150}
      >
        {[1, 2, 3, 4, 5, 6, 7].map(i => (
          <div
            key={i}
            style={{ textAlign: 'center', padding: 20 }}
            onClick={() => alert(1)}
          >
            item {i}
          </div>
        ))}
      </PullToRefresh>

      <div
        dangerouslySetInnerHTML={{
          __html: navigator.userAgent.match(/Android|iPhone|iPad|iPod/i)
            ? '<style>#qrcode, .highlight{ display: none }</style>'
            : '',
        }}
      />
    </div>
  );
};

export default Example1;
