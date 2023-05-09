//CSS
import './Pokeball.css';

interface PokeballProps {
  isSpin: boolean;
}

const Pokeball = (props: PokeballProps) => {
  return <div className={`pokeball ${props.isSpin ? 'spin' : 'wiggle'}`}></div>;
};

export default Pokeball;
