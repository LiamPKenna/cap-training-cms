import mockLessons from '../mockData/mockLessons';

const initialState = mockLessons;
const lessonsReducer = (state = initialState, action) => {
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

export default lessonsReducer;