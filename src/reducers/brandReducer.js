import mockBrand from '../constants/mockData/mockBrand';

const initialState = mockBrand;
const brandReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
  case 'UPDATE':
    console.log(action);


    break;

  default:
    break;
  }

  return state;
};

export default brandReducer;