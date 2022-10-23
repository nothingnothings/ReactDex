import React from 'react';

import Toolbar from '../../components/Toolbar/Toolbar';

import './Layout.css';

interface LayoutProps {
  children?: JSX.Element;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <React.Fragment>
      <Toolbar />

      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
