export const dec = () => {
  return { type: 'DEC', payload: 1 };
};

export const inc = () => {
  return { type: 'INC', payload: 1 };
};

export const rndAsync = () => {
  return function (dispatch) {
    setTimeout(() => {
      dispatch({ type: 'RND_ASYNC', payload: Math.floor(Math.random() * 10) });
    }, 2000);
  };
};
