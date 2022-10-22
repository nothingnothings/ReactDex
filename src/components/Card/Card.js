import React from 'react';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card px-2 mb-5 d-flex flex-row align-items-center justify-content-center">
      <a
        // href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`}
        target="_blank"
      ></a>
      <div className="pokemon-img-wrapper">
      <img
        alt="pokemon"
        className="pokemon-img"
        src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
      />
      </div>
      <div className="pokemon-desc ml-5 pl-3">
      <h2 className='text-nowrap'>
        {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
      </h2>
      </div>
    </div>
  );
};

export default Card;
