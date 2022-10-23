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
