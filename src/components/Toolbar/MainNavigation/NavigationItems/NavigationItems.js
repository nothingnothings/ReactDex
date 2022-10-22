import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navItems = [
  { id: 'pokedex', text: 'Pokedex', link: '/' },
  { id: 'search', text: 'Search for a Pokemon', link: '/search' },
];

const NavigationItems = (props) => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <ul className="main-header__item-list">

        {navItems.map((item) => {
          return (
            <NavigationItem
              key={item.id}
              link={item.link}
              type={props.type}
              text={item.text}
            ></NavigationItem>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default NavigationItems;
