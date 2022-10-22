import React from 'react';
import Card from '../Card/Card';

import './Pokedex.css';

const Pokedex = (props) => {
  return (
    <div className="pokedex">
      {props.pokemons.map((pokemon) => {
        return <Card key={pokemon.name} pokemon={pokemon}></Card>;
      })}
    </div>
  );
};

export default Pokedex;
