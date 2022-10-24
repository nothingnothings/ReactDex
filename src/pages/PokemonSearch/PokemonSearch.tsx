//REACT
import React, { useState } from 'react';

///COMPONENTS
import Pokedex from '../../components/Pokedex/Pokedex';

//MODELS
import { SimplePokemon } from '../../models/simplepokemon.model';

interface PokemonSearchProps {
  pokedex: SimplePokemon[];
  isLoading: boolean;
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
        isLoading={props.isLoading}
        isDetails={true}
        isSearch={true}
        inputChanged={inputChangedHandler}
        pokemons={filteredPokemons}
      ></Pokedex>
    </React.Fragment>
  );
};

export default PokemonSearch;
