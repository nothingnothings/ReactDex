import React from 'react';
import { Pokemon, Ability, Type } from '../../models/pokemon.model';

import './PokemonDetailsCard.css';

interface PokemonDetailsCardProps {
  pokemon: Pokemon;
}

const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-10">
          <div className="pokemon-details-card mt-5 pt-5">
            <div className="pokemon-details-card__image-wrapper d-flex">
              {/* <div className="pokemon-details-card__pokemon-title">
                <h1>{}</h1>
              </div> */}
              <h1 className="pokemon-details-card__pokemon-title">
                {props.pokemon.name}
              </h1>
              <div className="pokemon-details-card__pokemon-types">
                {props.pokemon.types.map((typeObject: Type) => {
                  return (
                    <span
                      className="pokemon-details-card__pokemon-type"
                      key={typeObject.type.name}
                    >
                      {typeObject.type.name}
                    </span>
                  );
                })}
              </div>
              <img
                src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
                className="pokemon-details-card__image"
                alt={props.pokemon.name}
              ></img>
            </div>
            <div className="pokemon-details-card__body">
              <div className="pokemon-details-card__body__height">
                <strong>Altura:</strong> {props.pokemon.height * 10} cm
              </div>
              <div className="pokemon-details-card__body__weight">
                <strong>Peso:</strong> {props.pokemon.weight / 10} kg
              </div>
              <div className="pokemon-details-card__body__skills">
                <strong>Habilidades:</strong>{' '}
                {props.pokemon.abilities.map((abilityObject: Ability) => {
                  return (
                    <span
                      className="pokemon-details-card__body-skill"
                      key={abilityObject.ability.name}
                    >
                      {abilityObject.ability.name}
                    </span>
                  );
                })}
              </div>
              <div className="pokemon-details-card__body__height">
                <strong>Experiência Base:</strong>{' '}
                {props.pokemon.base_experience}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
