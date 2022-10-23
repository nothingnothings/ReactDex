//REACT
import React from 'react';

//COMPONENTS
import Pokedex from '../../components/Pokedex/Pokedex';

//MODELS
import { SimplePokemon } from '../../models/simplepokemon.model';

interface PokedexPageProps {
  pokedex: SimplePokemon[];
}

const PokedexPage: React.FC<PokedexPageProps> = (props) => {
  return (
    <Pokedex
      pokemons={props.pokedex}
      wrapperMessage={'Pokédex'}
      isSearch={false}
      isDetails={false}
    ></Pokedex>
  );
};

export default PokedexPage;
