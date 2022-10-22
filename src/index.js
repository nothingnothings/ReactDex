import React from 'react';
import ReactDOM from 'react-dom/client';
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';
import './index.css';
import App from './App';



// const reducer = combineReducers(
//   {

//   }
// )


// const store = configureStore({
//   reducer,
//   devTools: process.env.NODE_ENV !== 'production',
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
// });



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
