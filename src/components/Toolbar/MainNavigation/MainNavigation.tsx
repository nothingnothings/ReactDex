//COMPONENTS
import NavigationItems from './NavigationItems/NavigationItems';

//CSS
import './MainNavigation.css';

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container navbar-container">
        <NavigationItems />
      </div>
    </nav>
  );
};

export default MainNavigation;
