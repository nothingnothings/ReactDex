import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ReactFragment } from 'react';
import PokedexWrapper from '../../components/hocs/PokedexWrapper/PokedexWrapper';

import './PokemonDetails.css';

const PokemonDetails = (props) => {



    const [pokemon, setPokemon] = useState([]);



  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=800')
      .then((res) => {
        console.log(res);
        console.log(res.data.results);

        return res.data.results;
      })
      .then((pokemons) => {
        setPokemon(pokemons);
      });
  }, []);

  return (
    <PokedexWrapper message="Quem é esse Pokemon?">
            <div className="single-pokemon-card">

                    
            </div>

    </PokedexWrapper>
  );


};

export default PokemonDetails;
