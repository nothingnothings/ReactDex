//REACT
import React from 'react';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

//COMPONENTS
import Pokedex from '../../components/Pokedex/Pokedex';

//MODELS
import { SimplePokemon } from '../../models/simplepokemon.model';

interface PokedexPageProps {
  pokedex: SimplePokemon[];
  isLoading: boolean;
  isError: boolean;
  errorMessage?: string;
}

const PokedexPage: React.FC<PokedexPageProps> = (props) => {
  let page;

  if (props.isError) {
    page = <ErrorComponent errorMessage={props.errorMessage!}></ErrorComponent>;
  } else {
    page = (
      <Pokedex
        pokemons={props.pokedex}
        wrapperMessage={'Pokédex'}
        isSearch={false}
        isDetails={false}
        isLoading={props.isLoading}
      ></Pokedex>
    );
  }

  return page;
};

export default PokedexPage;
