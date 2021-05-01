import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// const counterHolder = document.querySelector('.counter-holder');

// console.log(store.getState());
// document.querySelector('body').classList.add('light');

// store.subscribe(() => {
//   console.log('state', store.getState());
//   counterHolder.innerHTML = store.getState().counter;

//   document.querySelector('body').classList = null;
//   document.querySelector('body').classList.add(store.getState().theme.theme);
// });

// counterHolder.textContent = store.getState().counter;

// const { dec, inc, rndAsync, themeToggle } = bindActionCreators(actions, dispatch);

// document.querySelector('.dec').addEventListener('click', dec);
// document.querySelector('.inc').addEventListener('click', inc);
// document.querySelector('.rnd').addEventListener('click', rndAsync);

// document.querySelector('.theme-toggler__button').addEventListener('click', themeToggle);
