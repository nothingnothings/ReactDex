import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationItem.css';

interface NavigationItemProps {
  text: string;
  link: string;
  endProp: boolean;
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  return (
    <li className="main-header__item nav-item px-4">
      <NavLink to={props.link} end={props.endProp}>
        {props.text}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
