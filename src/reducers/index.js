import coursesReducer from './coursesReducer';
import lessonsReducer from './lessonsReducer';
import brandReducer from './brandReducer';
import linksReducer from './linksReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  brand: brandReducer,
  links: linksReducer,
  courses: coursesReducer,
  lessons: lessonsReducer
});

export default rootReducer;