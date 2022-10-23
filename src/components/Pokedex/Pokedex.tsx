import React from 'react';
import Card from '../Card/Card';
import PokedexWrapper from '../hocs/PokedexWrapper/PokedexWrapper';

import { SimplePokemon } from '../../models/simplepokemon.model';

import './Pokedex.css';

interface PokedexProps {
  pokemons: SimplePokemon[];
  wrapperMessage: string;
}

const Pokedex: React.FC<PokedexProps> = (props) => {
  return (
    <PokedexWrapper message={props.wrapperMessage} isDetails={false}>
      <div className="container pokedex mt-3 pt-3">
        <div className="row d-flex justify-content-center mt-5">
          {props.pokemons.map((pokemon, index) => {
            return (
              <div className="col-6" key={pokemon.name + Math.random()}>
                <Card pokemon={pokemon} pokemonId={1 + index}></Card>
              </div>
            );
          })}
        </div>
      </div>
    </PokedexWrapper>
  );
};

export default Pokedex;
