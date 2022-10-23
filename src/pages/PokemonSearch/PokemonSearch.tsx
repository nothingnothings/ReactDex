import React from 'react';
import Pokedex from '../../components/Pokedex/Pokedex';
import { SimplePokemon } from '../../models/simplepokemon.model';

import './PokemonSearch.css';

interface PokemonSearchProps {
  pokedex: SimplePokemon[];
}

const PokemonSearch: React.FC<PokemonSearchProps> = (props) => {
  return (
    <Pokedex
      wrapperMessage={'Procurar por um Pokémon'}
      pokemons={props.pokedex}
    ></Pokedex>
  );
};

export default PokemonSearch;
