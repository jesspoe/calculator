import React from 'react';

const keypadRow = (props) => {
  return (
    <div className="keypad_row">
      {props.children}
    </div>
  );
}

export default keypadRow;
