import React from 'react';

import MainNavigation from './MainNavigation/MainNavigation';

import './Toolbar.css';

const Toolbar = (props) => {
  if (props.token) {
    return 'dummy';
  }

  return (
    <React.Fragment>
      <header className="main-header">
        <MainNavigation cart={props.cart}></MainNavigation>
      </header>
    </React.Fragment>
  );
};

export default Toolbar;
