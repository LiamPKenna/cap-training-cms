import mockLinks from '../mockData/mockLinks';

const initialState = mockLinks;
const linksReducer = (state = initialState, action) => {
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

export default linksReducer;