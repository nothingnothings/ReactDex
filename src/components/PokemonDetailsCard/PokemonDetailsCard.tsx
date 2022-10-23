//REACT
import React from 'react';

//MODELS
import { Pokemon, Ability, Type } from '../../models/pokemon.model';

//CSS
import './PokemonDetailsCard.css';

interface PokemonDetailsCardProps {
  pokemon: Pokemon;
}

const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center text-white">
        <div className="col-10">
          <div className="pokemon-details-card mt-5 pt-3 d-flex flex-column align-items-center">
          <h1 className="pokemon-details-card__pokemon-title position-absolute text-dark">
                {props.pokemon.name}
              </h1>
              <div className="pokemon-details-card__pokemon-types position-absolute text-dark">
                {props.pokemon.types.map((typeObject: Type) => {
                  return (
                    <div
                      className="pokemon-details-card__pokemon-type"
                      key={typeObject.type.name}
                    >
                      {typeObject.type.name}
                    </div>
                  );
                })}
              </div>
            <div className="pokemon-details-card__image-wrapper d-flex justify-content-center pt-3 mt-5">

              <img
                src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
                className="pokemon-details-card__image"
                alt={props.pokemon.name}
              ></img>
            </div>
            <div className="pokemon-details-card__body px-5 py-5 mx-5 mt-4">
              <div className="pokemon-details-card__body__height mb-4">
                <strong>Altura:</strong> &nbsp; {props.pokemon.height * 10} cm
              </div>
              <div className="pokemon-details-card__body__weight mb-4">
                <strong>Peso:</strong> &nbsp; {props.pokemon.weight / 10} kg
              </div>
              <div className="pokemon-details-card__body__skills mb-4">
                <strong>Habilidades:</strong>{' '}
                {props.pokemon.abilities.map((abilityObject: Ability) => {
                  return (
                    <div
                      className="pokemon-details-card__body-skill ml-2 mr-1 p-1"
                      key={abilityObject.ability.name}
                    >
                      {abilityObject.ability.name}
                    </div>
                  );
                })}
              </div>
              <div className="pokemon-details-card__body__height mb-4">
                <strong>Experiência Base:</strong>{' '}
                &nbsp; {props.pokemon.base_experience}xp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
