// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { inc, dec, rndAsync, themeToggle } from './redux/actionCreators';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));
const { dispatch } = store;

const counterHolder = document.querySelector('.counter-holder');

console.log(store.getState());
document.querySelector('body').classList.add('light');

store.subscribe(() => {
  console.log('state', store.getState());
  counterHolder.innerHTML = store.getState().counter;

  document.querySelector('body').classList = null;
  document.querySelector('body').classList.add(store.getState().theme.theme);
});

counterHolder.textContent = store.getState().counter;

const { incDispatch, decDispatch, rndAsyncDispatch, themeDispathc } = bindActionCreators(
  {
    incDispatch: inc,
    decDispatch: dec,
    rndAsyncDispatch: rndAsync,
    themeDispathc: themeToggle,
  },
  dispatch,
);

document.querySelector('.dec').addEventListener('click', decDispatch);
document.querySelector('.inc').addEventListener('click', incDispatch);
document.querySelector('.rnd').addEventListener('click', rndAsyncDispatch);

document.querySelector('.theme-toggler__button').addEventListener('click', themeDispathc);
