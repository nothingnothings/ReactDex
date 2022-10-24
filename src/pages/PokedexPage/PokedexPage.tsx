//REACT
import React from 'react';

//COMPONENTS
import Pokedex from '../../components/Pokedex/Pokedex';
import Spinner from '../../components/Spinner/Spinner';

//MODELS
import { SimplePokemon } from '../../models/simplepokemon.model';

interface PokedexPageProps {
  pokedex: SimplePokemon[];
  isLoading: boolean;
}

const PokedexPage: React.FC<PokedexPageProps> = (props) => {
  return (
    <Pokedex
      pokemons={props.pokedex}
      wrapperMessage={'Pokédex'}
      isSearch={false}
      isDetails={false}
      isLoading={props.isLoading}
    ></Pokedex>
  );
};

export default PokedexPage;
