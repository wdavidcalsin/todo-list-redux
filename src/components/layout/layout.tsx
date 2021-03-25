import React from 'react';
import Header from '../header/header';

const Layout = ({ children, toggleTheme }: any) => {
  return (
    <div className="container-small">
      <Header toggleTheme={toggleTheme} />
      {children}
    </div>
  );
};
export default Layout;
