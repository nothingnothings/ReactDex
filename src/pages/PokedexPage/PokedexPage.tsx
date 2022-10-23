import React from 'react';

import './PokedexPage.css';

// import { connect } from 'react-redux';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

import Pokedex from '../../components/Pokedex/Pokedex';

import { SimplePokemon } from '../../models/simplepokemon.model';

interface PokedexPageProps {
  pokedex: SimplePokemon[];
}

const PokedexPage: React.FC<PokedexPageProps> = (props) => {
  //   const [pokedex, setPokedex] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get('https://pokeapi.co/api/v2/pokemon?limit=800')
  //       .then((res) => {
  //         console.log(res);
  //         console.log(res.data.results);

  //         return res.data.results;
  //       })
  //       .then((pokemons) => {
  //         setPokedex(pokemons);
  //       });
  //   }, []);

  return <Pokedex pokemons={props.pokedex} wrapperMessage={"Pokédex"}></Pokedex>;
};

export default PokedexPage;
