//REACT
import React from 'react';

//MODELS
import { Pokemon, Ability, Type, Form } from '../../models/pokemon.model';

//CSS
import './PokemonDetailsCard.css';

interface PokemonDetailsCardProps {
  pokemon: Pokemon;
}

// adds zeroes to Pokemon IDS
const zeroPad = (num: number, places: number) =>
  String(num).padStart(places, '0');

const PokemonDetailsCard: React.FC<PokemonDetailsCardProps> = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center text-white mt-4">
        <div className="col-md-11 col-lg-9">
          <div
            className={`pokemon-details-card ${props.pokemon.types[0].type.name}-bg mt-4 pt-4 d-flex flex-column align-items-center`}
          >
            <div className="outer-wrapper d-flex mt-4">
              <div className="pokemon-text-outer-wrapper align-self-start d-flex flex-column mr-5 pr-5">
                <h1 className="pokemon-details-card__pokemon-title">
                  {props.pokemon.name}
                </h1>
                <div className="pokemon-details-card__pokemon-types text-dark">
                  {props.pokemon.types.map((typeObject: Type) => {
                    return (
                      <div
                        className={`pokemon-details-card__pokemon-type ${typeObject.type.name} ml-2 mr-1 px-3 py-1`}
                        key={typeObject.type.name}
                      >
                        {typeObject.type.name}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pokemon-details-card__pokemon-number d-flex flex-column justify-content-center ml-5 pl-5">
                <h3 className="pokemon-number-content">
                  #{zeroPad(props.pokemon.id, 3)}
                </h3>
              </div>
            </div>

            <div className="pokemon-details-card__image-wrapper d-flex justify-content-center mt-5">
              <img
                src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}
                className="pokemon-details-card__image"
                alt={props.pokemon.name}
              ></img>
            </div>

            <div className="pokemon-details-card__body px-5 py-2 mx-5 mt-4">
              <div className="pokemon-details-card__body__height my-4">
                <strong>Altura:</strong> &nbsp; {props.pokemon.height * 10} cm
              </div>
              <div className="pokemon-details-card__body__weight my-4">
                <strong>Peso:</strong> &nbsp; {props.pokemon.weight / 10} kg
              </div>
              <div className="pokemon-details-card__body__skills my-4">
                <strong>Habilidades:</strong>{' '}
                {props.pokemon.abilities.map((abilityObject: Ability) => {
                  return (
                    <div
                      className="pokemon-details-card__body-skill ml-2 mr-1 px-2 py-1"
                      key={abilityObject.ability.name}
                    >
                      {abilityObject.ability.name}
                    </div>
                  );
                })}
              </div>
              <div className="pokemon-details-card__body__height my-4">
                <strong>Experiência Base:</strong> &nbsp;{' '}
                {props.pokemon.base_experience}xp
              </div>
              <div className="pokemon-details-card__body__forms mt-4 pb-2">
                <strong>Formas:</strong>{' '}
                {props.pokemon.forms.map((formObject: Form) => {
                  return (
                    <div
                      className="pokemon-details-card__body-form ml-2 mr-1 px-2 py-1 my-1"
                      key={formObject.name}
                    >
                      {formObject.name}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
