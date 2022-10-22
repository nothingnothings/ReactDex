import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';

import './MainNavigation.css';

const MainNavigation = (props) => {
  return (
    <nav className="main-header__nav">
      <NavigationItems logout={props.token} type="main" cart={props.cart} />
    </nav>
  );
};

export default MainNavigation;
