import mockState from '../mockData/mockState';

const initialState = mockState;
const reducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'UPDATE':
      console.log(action);


      break;

    default:
      break;
  }

  return state;
}

export default reducer;