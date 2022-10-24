//REACT
import React from 'react';

//COMPONENTS
import PokedexWrapper from '../hocs/PokedexWrapper/PokedexWrapper';
import PokeSearch from '../PokeSearch/PokeSearch';
import Card from '../Card/Card';

//MODELS
import { SimplePokemon } from '../../models/simplepokemon.model';

//CSS
import './Pokedex.css';

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
      <div className="container pokedex mt-3 pt-2">
        {props.isSearch && <PokeSearch inputChanged={props.inputChanged!} />}
        <div className="row d-flex justify-content-center mt-5">
          {props.pokemons.map((pokemon, _index) => {
            return (
              <div className="col-11 col-md-8 col-lg-6 " key={pokemon.name + Math.random()}>
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
