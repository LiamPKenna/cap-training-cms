import coursesReducer from './coursesReducer';
import lessonsReducer from './lessonsReducer';
import brandReducer from './brandReducer';
import linksReducer from './linksReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  brand: brandReducer,
  links: linksReducer,
  courses: coursesReducer,
  lessons: lessonsReducer
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));