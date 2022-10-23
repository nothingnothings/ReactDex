import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokedexWrapper from '../../components/hocs/PokedexWrapper/PokedexWrapper';
import PokemonDetailsCard from '../../components/PokemonDetailsCard/PokemonDetailsCard';
import { Pokemon } from '../../models/pokemon.model';

import './PokemonDetails.css';

// interface AppProps {

// }

const PokemonDetails: React.FC<Pokemon> = (props) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  const params = useParams();
  const pokemonId = params.pokemonId;
  let content;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => {
        console.log(res.data);

        return res.data;
      })
      .then((pokemonData: Pokemon) => {
        // setPokemon(pokemonData);

        setPokemon((prevState) => {
          return pokemonData;
        });
      });
  }, []);

  if (!pokemon) {
    content = (
      <PokedexWrapper message="Quem é esse Pokemon?" isDetails={true}>
        <div>Loading...</div>
      </PokedexWrapper>
    );
  } else {
    content = (
      <PokedexWrapper message="Quem é esse Pokemon?" isDetails={true}>
        <PokemonDetailsCard pokemon={pokemon}></PokemonDetailsCard>
      </PokedexWrapper>
    );
  }

  return content;
};

export default PokemonDetails;
