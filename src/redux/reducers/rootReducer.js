import { combineReducers } from 'redux';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND_ASYNC':
      return action.payload;

    default:
      return state;
  }
};

const themeReducer = (state = { theme: 'light' }, action) => {
  switch (action.type) {
    case 'THEME_TOGGLE':
      return state.theme === 'light' ? { ...state, theme: 'dark' } : { ...state, theme: 'light' };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
});

export default rootReducer;
