import React from 'react';
import Card from '../Card/Card';
import PokedexWrapper from '../hocs/PokedexWrapper/PokedexWrapper';

import { SimplePokemon } from '../../models/simplepokemon.model';

import './Pokedex.css';
import PokeSearch from '../PokeSearch/PokeSearch';

interface PokedexProps {
  pokemons: SimplePokemon[];
  wrapperMessage: string;
  isSearch: boolean;
  inputChanged?: (event: React.FormEvent) => void;
  isDetails: boolean;
}

const Pokedex: React.FC<PokedexProps> = (props) => {
  return (
    <PokedexWrapper message={props.wrapperMessage} isDetails={props.isDetails}>
      <div className="container pokedex mt-3 pt-3">
        {props.isSearch && <PokeSearch inputChanged={props.inputChanged!} />}
        <div className="row d-flex justify-content-center mt-5">
          {props.pokemons.map((pokemon, _index) => {
            return (
              <div className="col-6" key={pokemon.name + Math.random()}>
                <Card pokemon={pokemon}></Card>
              </div>
            );
          })}
        </div>
      </div>
    </PokedexWrapper>
  );
};

export default Pokedex;
