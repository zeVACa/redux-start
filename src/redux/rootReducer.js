import { combineReducers } from 'redux';
import { INC, DEC, RND_ASYNC, THEME_TOGGLE } from './types';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INC:
      return state + 1;
    case DEC:
      return state - 1;
    case RND_ASYNC:
      return action.payload;

    default:
      return state;
  }
};

const themeReducer = (state = { themeName: 'light' }, action) => {
  switch (action.type) {
    case THEME_TOGGLE:
      return state.themeName === 'light'
        ? { ...state, themeName: 'dark' }
        : { ...state, themeName: 'light' };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export default rootReducer;
