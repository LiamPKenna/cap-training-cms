import rootReducer from './../../reducers';
import coursesReducer from './../../reducers/coursesReducer';
import brandReducer from './../../reducers/brandReducer';
import linksReducer from './../../reducers/linksReducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({
      brand: {},
      links: {},
      courses: {}
    }, { type: null })).toEqual({
      brand: {},
      links: {},
      courses: {}
    });
  });

  test('Should contain coursesReducer logic', () => {
    expect(store.getState().courses).toEqual(coursesReducer(undefined, { type: null }));
  });

  test('Should contain brandReducer logic', () => {
    expect(store.getState().brand).toEqual(brandReducer(undefined, { type: null }));
  });

  test('Should contain linksReducer logic', () => {
    expect(store.getState().links).toEqual(linksReducer(undefined, { type: null }));
  });
});