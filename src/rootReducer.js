const rootReducer = (state = 0, action) => {
  console.log('action payoload', action.payload);
  switch (action.type) {
    case 'INC':
      return state + 1;
      break;
    case 'DEC':
      return state - 1;
      break;
    case 'RND_ASYNC':
      // return new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     console.log(action);
      //     resolve(action);
      //   }, 1000);
      // });
      return action.payload;

    default:
      return state;
  }
};

export default rootReducer;
