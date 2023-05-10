//REACT
import React from 'react';

//COMPONENTS
import NavigationItem from './NavigationItem/NavigationItem';

///CSS
import './NavigationItems.css';

const navItems = [
  { id: 'pokedex', text: 'Pokédex', link: '/' },
  { id: 'search', text: 'Procurar por um Pokémon', link: '/search' },
];

const NavigationItems = () => {
  return (
    <React.Fragment>
      <ul className="main-header__item-list navbar-nav">
        {navItems.map((item) => {
          return (
            <NavigationItem
              key={item.id}
              link={item.link}
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
