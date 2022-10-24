//REACT
import React from 'react';

interface PokeSearchProps {
  inputChanged: (event: React.FormEvent) => void;
}

const PokeSearch: React.FC<PokeSearchProps> = (props) => {
  return (
    <div className="container pokeSearch-container mt-5 pb-3">
      <div className="row justify-content-center">
        <div className="col-8">
          <div className="form-group">
            <input
              className="form-control custom-form-control"
              placeholder="Procurar por um Pokémon"
              type="text"
              onChange={props.inputChanged}
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokeSearch;
