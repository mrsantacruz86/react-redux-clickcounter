import { createStore, applyMiddleware } from 'redux';
import {logger} from 'redux-logger';
const initialState = {
  count: 1
}

const reducer = (state = initialState, action) => {
  console.log("reducer", action);

  switch (action.type) {
    case "INCREMENT":
      return Object.assign({}, state, { count: state.count + 1 })
    case "DECREMENT":
      return Object.assign({}, state, { count: state.count - 1 })
    default:
      return state;
  }
  return state;
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
  );
export default store;