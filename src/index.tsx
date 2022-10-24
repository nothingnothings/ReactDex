////REACT
import * as ReactDOMClient from 'react-dom/client';

//COMPONENTS
import App from './App';

///CSS
import './index.css';

// NEW REACTDOM SYNTAX 
const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container!);
root.render(<App />);
