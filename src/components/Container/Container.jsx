import React from 'react';

const Container = ({children}) => {
  const container = {
    maxWidth: '1440px',
    margin: '0 auto',  // Centering the container horizontally
  };

  return (
    <div style={container}>{children}</div>
  );
};

export default Container;
