////REACT
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

///AXIOS
import axios from 'axios';

///COMPONENTS
import PokedexWrapper from '../../components/hocs/PokedexWrapper/PokedexWrapper';
import PokemonDetailsCard from '../../components/PokemonDetailsCard/PokemonDetailsCard';

///MODELS
import { Pokemon } from '../../models/pokemon.model';
import Spinner from '../../components/Spinner/Spinner';

const PokemonDetails: React.FC<Pokemon> = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [detailsLoading, setDetailsLoading] = useState<boolean>(true);

  const params = useParams();
  const pokemonId = params.pokemonId;

  let content;

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((res) => {
        return res.data;
      })
      .then((pokemonData: Pokemon) => {
        setDetailsLoading(false);
        setPokemon((_prevState) => {
          return pokemonData;
        });
      });
  }, []);

  if (!pokemon && detailsLoading) {
    content = (
      <PokedexWrapper message="Quem é esse Pokemon?" isDetails={true}>
        <Spinner></Spinner>
      </PokedexWrapper>
    );
  } else {
    content = (
      <PokedexWrapper message="Quem é esse Pokemon?" isDetails={true}>
        <PokemonDetailsCard pokemon={pokemon!}></PokemonDetailsCard>
      </PokedexWrapper>
    );
  }

  return content;
};

export default PokemonDetails;
