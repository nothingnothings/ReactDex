//REACT
import React from 'react';

//COMPONENTS
import PokedexWrapper from '../hocs/PokedexWrapper/PokedexWrapper';
import PokeSearch from '../PokeSearch/PokeSearch';
import Card from '../Card/Card';
import Spinner from '../UI/Spinner/Spinner';

//MODELS
import { SimplePokemon } from '../../models/simplepokemon.model';

//CSS
import './Pokedex.css';

interface PokedexProps {
  pokemons: SimplePokemon[];
  isLoading: boolean;
  wrapperMessage: string;
  isSearch: boolean;
  inputChanged?: (event: React.FormEvent) => void;
  isDetails: boolean;
}

const Pokedex: React.FC<PokedexProps> = (props) => {
  let content;

  if (props.isLoading && props.pokemons.length === 0) {
    content = (
      <PokedexWrapper message={props.wrapperMessage} isDetails={true}>
        <Spinner></Spinner>
      </PokedexWrapper>
    );
  } else {
    content = (
      <PokedexWrapper
        message={props.wrapperMessage}
        isDetails={props.isDetails}
      >
        <div className="container pokedex mt-3 pt-2">
          {props.isSearch && <PokeSearch inputChanged={props.inputChanged!} />}
          <div className="row d-flex justify-content-center mt-5">
            {props.pokemons.length > 0 &&
              props.pokemons.map((pokemon, _index) => {
                return (
                  <div
                    className="col-12 col-sm-11 col-md-8 col-lg-6"
                    key={pokemon.name + Math.random()}
                  >
                    <Card pokemon={pokemon}></Card>
                  </div>
                );
              })}

            {props.pokemons.length === 0 && (
              <div className="col-12 col-sm-11 col-md-8 col-lg-6 mt-4 text-center font-weight-bold">
                Nenhum Pokémon encontrado.
              </div>
            )}
          </div>
        </div>
      </PokedexWrapper>
    );
  }

  return content;
};

export default Pokedex;
