//REACT
import React from 'react';

//COMPONENTS
import Toolbar from '../../UI/Toolbar/Toolbar';

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
