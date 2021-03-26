import React from 'react';
import { ToastContainer } from 'react-toastify';
import Header from '../header/header';

const Layout = ({ children, toggleTheme }: any) => {
  return (
    <div className="container-small">
      <Header toggleTheme={toggleTheme} />
      {children}
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Layout;
