import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.css';

const navItems = [
  { id: 'pokedex', text: 'Pokédex', link: '/' },
  { id: 'search', text: 'Procurar por um Pokémon', link: '/search' },
];

const NavigationItems = (props) => {
  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <ul className="main-header__item-list navbar-nav">
        {navItems.map((item) => {
          return (
            <NavigationItem
              key={item.id}
              link={item.link}
              type={props.type}
              text={item.text}
              endProp={item.id === 'pokedex' ? true : false}
            ></NavigationItem>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default NavigationItems;
