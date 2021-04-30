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

import { inc, dec, rndAsync } from './redux/actions';
import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));
const { dispatch } = store;

const counterHolder = document.querySelector('.counter-holder');

store.subscribe(() => {
  console.log('state', store.getState());
  counterHolder.innerHTML = store.getState();
});

let counter = 0;
counterHolder.textContent = counter;

const { incDispatch, decDispatch, rndAsyncDispatch } = bindActionCreators(
  {
    incDispatch: inc,
    decDispatch: dec,
    rndAsyncDispatch: rndAsync,
  },
  dispatch,
);

document.querySelector('.dec').addEventListener('click', decDispatch);
document.querySelector('.inc').addEventListener('click', incDispatch);
document.querySelector('.rnd').addEventListener('click', rndAsyncDispatch);
