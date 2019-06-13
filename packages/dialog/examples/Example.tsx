import * as React from 'react';

import Dialog from '../src';

const Example: React.FunctionComponent = props => {
  const [visible, setVisible] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);
  const [center, setCenter] = React.useState(false);

  const onClick = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onCenter = e => {
    setCenter(e.target.checked);
  };

  const showDialog2 = () => {
    setVisible2(true);
  };

  const getDialog1 = () => {
    const wrapClassName = center ? 'center' : '';

    return (
      <Dialog
        visible={visible}
        wrapClassName={wrapClassName}
        animation="zoom"
        maskAnimation="fade"
        onClose={onClose}
      >
        <p onClick={showDialog2}>click to show dialog2</p>
        <div
          style={{
            height: 200,
          }}
        ></div>
      </Dialog>
    );
  };

  const getDialog2 = () => {
    return (
      <Dialog
        visible={visible2}
        animation="zoom"
        maskAnimation="fade"
        onClose={() => {
          setVisible2(false);
        }}
      >
        <p>basic modal</p>
        <div
          style={{
            height: 200,
          }}
        ></div>
      </Dialog>
    );
  };

  return (
    <div
      style={{
        width: '90%',
        margin: '0 auto',
      }}
    >
      <style>
        {`
      .center {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      `}
      </style>
      <p>
        <button className="btn btn-primary" onClick={onClick}>
          show dialog
        </button>
        &nbsp;
        <label>
          center
          <input type="checkbox" checked={center} onChange={onCenter} />
        </label>
      </p>
      {getDialog1()}
      {getDialog2()}
    </div>
  );
};

export default Example;
