import mockState from '../mockData/mockState';

const initialState = mockState;
const reducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);

  return state;
}

export default reducer;