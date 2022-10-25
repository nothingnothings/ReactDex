//REACT
import React from 'react';

//CSS
import './PokedexWrapper.css';

interface PokedexWrapperProps {
  message: string;
  isDetails: boolean;
  children?: JSX.Element;
}

const PokedexWrapper: React.FC<PokedexWrapperProps> = (props) => {
  return (
    <div
      className={`pokedex-wrapper container ${
        props.isDetails ? 'details-wrapper' : ''
      }`}
    >
      <div className="pokedex-title pt-2 mt-4 mt-md-0">
        <h1 className="text-center text-md-nowrap mt-5 pt-5">{props.message}</h1>
      </div>
      {props.children}
    </div>
  );
};

export default PokedexWrapper;
