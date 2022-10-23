// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import PokedexWrapper from '../../components/hocs/PokedexWrapper/PokedexWrapper';
// import PokemonDetailsCard from '../../components/PokemonDetailsCard/PokemonDetailsCard';

// import './PokemonDetails.css';

// const PokemonDetails = (props) => {
//   const [pokemon, setPokemon] = useState([]);

//   const params = useParams();
//   const pokemonId = params.pokemonId;
//   let content;


//   useEffect(() => {
//     axios
//       .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
//       .then((res) => {
//         console.log(res.data);

//         return res.data;
//       })
//       .then((pokemonData) => {
//         setPokemon(pokemonData);
//       });
//   }, []);



//   if (pokemon.length === 0) {
//       content = (
//         <PokedexWrapper message="Quem é esse Pokemon?" isDetails={true}>
//           <div>Loading...</div>
//       </PokedexWrapper>
//       )
//   } else {
//     content = (
//       <PokedexWrapper message="Quem é esse Pokemon?" isDetails={true}>
//       <PokemonDetailsCard pokemon={pokemon}>
//       </PokemonDetailsCard>
//     </PokedexWrapper>
//     )
//   }





//   return content;
// };

// export default PokemonDetails;
