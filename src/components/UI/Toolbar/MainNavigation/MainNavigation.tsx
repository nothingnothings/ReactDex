//COMPONENTS
import NavigationItems from './NavigationItems/NavigationItems';

//CSS
import './MainNavigation.css';

///IMAGES

import ReactImage from '../../../../assets/images/react-logo.png';
import GitHubImage from '../../../../assets/images/github-logo.png';

const MainNavigation = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand">
      <div className="container navbar-container justify-content-between">
        <NavigationItems />
        <img
          src={ReactImage}
          alt="react"
          className="react-image d-none d-md-block"
        ></img>
        <a
          href="https://github.com/nothingnothings/ReactDex"
          rel="noreferrer"
          target="_blank"
        >
          <img
            src={GitHubImage}
            alt="github-source-code"
            className="github-image d-none d-sm-block"
          ></img>
        </a>
      </div>
    </nav>
  );
};

export default MainNavigation;
