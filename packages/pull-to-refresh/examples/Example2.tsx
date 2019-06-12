import * as React from 'react';
import PullToRefresh from '../src';

const Lv: React.FunctionComponent<{
  pullToRefresh: React.FunctionComponentElement<any>;
}> = props => {
  const el = React.useRef(null);
  const forceUpdate = React.useState()[1];

  React.useLayoutEffect(() => {
    if (props.pullToRefresh) {
      forceUpdate(null);
    }
  }, []);

  let child = props.children;
  if (props.pullToRefresh) {
    child = React.cloneElement(
      props.pullToRefresh,
      {
        getScrollContainer: () => el.current,
      },
      child,
    );
  }
  return (
    <div ref={el.current} style={{ height: 200, border: 1, overflow: 'auto' }}>
      {child}
    </div>
  );
};

const Example2: React.FunctionComponent = props => {
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    document.body.style.overflowY = navigator.userAgent.match(
      /Android|iPhone|iPad|iPod/i,
    )
      ? 'hidden'
      : 'auto';
  }, []);

  return (
    <Lv
      pullToRefresh={
        <PullToRefresh
          className="forTest"
          direction="up"
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            setTimeout(() => {
              setRefreshing(false);
            }, 1000);
          }}
        />
      }
    >
      {[1, 2, 3, 4, 5, 6, 7].map(i => (
        <div key={i} style={{ textAlign: 'center', padding: 20 }}>
          item {i}
        </div>
      ))}
    </Lv>
  );
};

export default Example2;
