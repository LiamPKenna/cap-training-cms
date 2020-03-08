import coursesReducer from './coursesReducer';
import lessonsReducer from './lessonsReducer';
import brandReducer from './brandReducer';
import userReducer from './userReducer';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({
  brand: brandReducer,
  courses: coursesReducer,
  lessons: lessonsReducer,
  users: userReducer
});

export default createStore(rootReducer, applyMiddleware(thunkMiddleware));