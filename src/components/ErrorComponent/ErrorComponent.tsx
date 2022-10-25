//COMPONENTS
import PokedexWrapper from '../hocs/PokedexWrapper/PokedexWrapper';
import Pokeball from '../UI/PokeBall/Pokeball';

//CSS
import './ErrorComponent.css';

interface ErrorComponentProps {
  errorMessage: string;
}

const ErrorComponent = (props: ErrorComponentProps) => {
  return (
    <PokedexWrapper isDetails={true} message="Pokédex">
      <div className="error-wrapper mt-sm-5 pt-sm-5">
        <div className="row d-flex justify-content-center mt-5 pt-5">
          <Pokeball isSpin={false}></Pokeball>
          <div className="container">
            <div className="row d-flex justify-content-center my-2 text-center">
              <div className="col-9">
                <h1 className="error-page-body__message mt-5 pt-3">
                  Parece que houve algum erro. Clique{' '}
                  <a className="redirect-link" href="/">
                    aqui
                  </a>{' '}
                  se deseja retornar ao início.
                </h1>
                <h2 className="text-left mt-5 pt-2">
                  <strong>Motivo do erro: &nbsp; </strong>
                  {props.errorMessage}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PokedexWrapper>
  );
};

export default ErrorComponent;
