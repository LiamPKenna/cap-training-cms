import mockCourses from '../mockData/mockCourses';

const initialState = mockCourses;
const coursesReducer = (state = initialState, action) => {
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

export default coursesReducer;