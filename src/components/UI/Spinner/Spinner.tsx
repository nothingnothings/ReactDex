//CSS
import Pokeball from '../PokeBall/Pokeball';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="container spinner-wrapper mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="col-8 d-flex justify-content-center mt-5 pt-5">
          <Pokeball isSpin={true}></Pokeball>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
