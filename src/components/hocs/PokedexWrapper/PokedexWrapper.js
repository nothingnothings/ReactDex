import React from 'react';

import './PokedexWrapper.css';

const PokedexWrapper = (props) => {
  return (
    <div className="pokedex-wrapper container">
      <div className="pokedex-title mt-3 pt-3">
        <h1 className="text-center mt-5 pt-5">{props.message}</h1>
      </div>
      {props.children}
    </div>
  );
};

export default PokedexWrapper;
