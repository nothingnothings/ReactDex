// import React from 'react';
// import { ReactFragment } from 'react';

// import './PokedexPage.css';

// // import { connect } from 'react-redux';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// import Pokedex from '../../components/Pokedex/Pokedex';

// const PokedexPage = () => {
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

//   return (
//     <React.Fragment>
//       <Pokedex pokemons={pokedex}></Pokedex>
//     </React.Fragment>
//   );
// };

// export default PokedexPage;
