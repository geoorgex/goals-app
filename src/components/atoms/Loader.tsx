import React from 'react';
import { DotLoader } from 'react-spinners';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100vh',
};

const Loader = () => {
  return (
    <div style={styles}>
      <DotLoader />
    </div>
  );
};

export default Loader;
