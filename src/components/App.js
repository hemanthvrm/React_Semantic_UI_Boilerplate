import React from 'react';
import HeaderBar from './HeaderBar';
import 'styling/semantic.less'

export default ({ children }) => {
  return (
    <div>
      <HeaderBar />
      {children}
    </div>
  );
};
