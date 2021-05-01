export const dec = () => {
  return { type: 'DEC' };
};

export const inc = () => {
  return { type: 'INC' };
};

export const rndAsync = () => {
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: 'RND_ASYNC', payload: randomIntFromInterval(1, 100) });
    }, 1000);
  };
};

export const themeToggle = () => {
  return { type: 'THEME_TOGGLE', payload: 'light' };
};
