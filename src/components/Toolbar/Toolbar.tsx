///REACT
import React from 'react';

//COMPONENTS
import MainNavigation from './MainNavigation/MainNavigation';

//CSS
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
