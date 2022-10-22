import React from 'react';
import { NavLink } from 'react-router-dom';

import './Card.css';

const Card = (props) => {
  console.log(props.pokemon);
  return (

    <NavLink to={`/pokedex/${props.index}`} className="pokemon-link">
    <div className="card px-2 mb-5 d-flex flex-row align-items-center justify-content-center position-relative">
              <h3 className="pokemon-number text-right position-absolute"># {props.pokemonId}</h3>
      <div className="pokemon-img-wrapper">
        <img
          alt="pokemon"
          className="pokemon-img"
          src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
        />
      </div>
      <div className="pokemon-desc-wrapper">
        <div className="ml-4 pl-4">
          <h2 className="text-nowrap pokemon-name">
            {props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}
          </h2>
        </div>
      </div>
    </div>
    </NavLink>
  );
};

export default Card;
