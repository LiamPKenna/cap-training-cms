import coursesReducer from './coursesReducer';
import brandReducer from './brandReducer';
import linksReducer from './linksReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  brand: brandReducer,
  links: linksReducer,
  courses: coursesReducer
});

export default rootReducer;