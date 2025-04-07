import React from 'react';

const HorizontalDivider = () => {
  const dividerStyle = {
    border: 'none',
    borderTop: '1px solid #ccc', // Grey border color
  };

  return (
    <div>
      <hr style={dividerStyle} />
    </div>
  );
};

export default HorizontalDivider;
