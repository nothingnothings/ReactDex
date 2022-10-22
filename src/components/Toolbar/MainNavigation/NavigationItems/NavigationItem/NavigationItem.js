import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

const NavigationItem = (props) => {
  return (
    <li className="main-header__item nav-item px-4">
      <NavLink to={props.link} end={props.endProp}>
        {props.text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
