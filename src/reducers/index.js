import coursesReducer from './coursesReducer';
import lessonsReducer from './lessonsReducer';
import brandReducer from './brandReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  brand: brandReducer,
  courses: coursesReducer,
  lessons: lessonsReducer
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));