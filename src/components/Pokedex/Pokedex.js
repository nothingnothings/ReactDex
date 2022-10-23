import React from 'react';
import Card from '../Card/Card';
import PokedexWrapper from '../hocs/PokedexWrapper/PokedexWrapper';

import './Pokedex.css';

// const Pokedex = (props) => {
//   return (
//     <div className="pokedex-wrapper container">
//       <div className="pokedex-title mt-3 pt-3">
//         <h1 className="text-center mt-5 pt-5">Pokédex</h1>
//       </div>
//       <div className="container pokedex mt-3 pt-3">
//         <div className="row d-flex justify-content-center mt-5">
//           {props.pokemons.map((pokemon, index) => {
//             return (
//               <div className="col-6" key={pokemon.name + Math.random()}>
//                 <Card pokemon={pokemon} pokemonId={1 + index}></Card>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// const Pokedex = (props) => {
//   return (
//     <div className="pokedex-wrapper container">
//       <div className="pokedex-title mt-3 pt-3">
//         <h1 className="text-center mt-5 pt-5">Pokédex</h1>
//       </div>

//     </div>
//   );
// };

const Pokedex = (props) => {
  return (
    <PokedexWrapper message="Pokédex" isDetails={false}>
      <div className="container pokedex mt-3 pt-3">
        <div className="row d-flex justify-content-center mt-5">
          {props.pokemons.map((pokemon, index) => {
            return (
              <div className="col-6" key={pokemon.name + Math.random()}>
                <Card pokemon={pokemon} pokemonId={1 + index}></Card>
              </div>
            );
          })}
        </div>
      </div>
    </PokedexWrapper>
  );
};

export default Pokedex;
