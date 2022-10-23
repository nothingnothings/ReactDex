import React, { useState } from 'react';
import Pokedex from '../../components/Pokedex/Pokedex';
// import PokeSearch from '../../components/PokeSearch/PokeSearch';
import { SimplePokemon } from '../../models/simplepokemon.model';

import './PokemonSearch.css';

interface PokemonSearchProps {
  pokedex: SimplePokemon[];
}

const PokemonSearch: React.FC<PokemonSearchProps> = (props) => {
  const [searchedPokemon, setSearchedPokemon] = useState<string>('');

  const inputChangedHandler = (event: React.FormEvent) => {
    setSearchedPokemon((_prevState) => {
      return (event.target as HTMLInputElement).value;
    });
  };

  const filteredPokemons = props.pokedex.filter((pokemon: SimplePokemon) => {
    return pokemon.name.toUpperCase().includes(searchedPokemon.toUpperCase());
  });

  return (
    <React.Fragment>
      <Pokedex
        wrapperMessage={'Procurar por um Pokémon'}
        isDetails={true}
        isSearch={true}
        inputChanged={inputChangedHandler}
        pokemons={filteredPokemons}
      ></Pokedex>
    </React.Fragment>
  );
};

export default PokemonSearch;
