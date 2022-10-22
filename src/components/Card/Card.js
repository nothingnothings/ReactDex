import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
      <a
        // href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`}
        target="_blank"
      ></a>
      <img
        alt="pokemon"
        src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
      />
      <h2>
        {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
      </h2>
    </div>
  );
};

export default Card;
