//REACT
import React, { useState } from 'react';

///COMPONENTS
import Pokedex from '../../components/Pokedex/Pokedex';
import ErrorComponent from '../../components/ErrorComponent/ErrorComponent';

//MODELS
import { SimplePokemon } from '../../models/simplepokemon.model';

interface PokemonSearchProps {
  pokedex: SimplePokemon[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
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

  let page;

  if (props.isError && searchedPokemon.length === 0) {
    page = <ErrorComponent errorMessage={props.errorMessage!}></ErrorComponent>;
  } else {
    page = (
      <Pokedex
        wrapperMessage={'Procurar por um Pokémon'}
        isLoading={props.isLoading}
        isDetails={true}
        isSearch={true}
        inputChanged={inputChangedHandler}
        pokemons={filteredPokemons}
      ></Pokedex>
    );
  }

  return page;
};

export default PokemonSearch;
