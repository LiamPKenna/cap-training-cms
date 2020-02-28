const initialState = {};
const reducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);

  return state;
}

export default reducer;