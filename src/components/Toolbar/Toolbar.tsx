import React from 'react';

import MainNavigation from './MainNavigation/MainNavigation';

import './Toolbar.css';

const Toolbar = () => {
  return (
    <React.Fragment>
      <header className="main-header">
        <MainNavigation></MainNavigation>
      </header>
    </React.Fragment>
  );
};

export default Toolbar;
