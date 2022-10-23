import React from 'react';
import { NavLink } from 'react-router-dom';
import { SimplePokemon } from '../../models/simplepokemon.model';

import './Card.css';

interface CardProps {
  // pokemonId: number;
  pokemon: SimplePokemon;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <NavLink to={`/pokedex/${props.pokemon.id}`} className="pokemon-link">
      <div className="card px-2 mb-5 d-flex flex-row align-items-center justify-content-center position-relative">
        <h3 className="pokemon-number text-right position-absolute">
          # {props.pokemon.id}
        </h3>
        <div className="pokemon-img-wrapper">
          <img
            alt="pokemon"
            className="pokemon-img"
            src={(props.pokemon.id !== 778) && (props.pokemon.id !== 774)  ? `https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg` : 'dummy'}
          />
        </div>
        <div className="pokemon-desc-wrapper">
          <div className="ml-4 pl-4">
            <h2 className="text-nowrap pokemon-name">
              {props.pokemon.name[0].toUpperCase() +
                props.pokemon.name.slice(1)}
            </h2>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
