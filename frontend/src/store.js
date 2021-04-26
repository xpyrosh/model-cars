import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// All reducers will be put into the combine
const reducer = combineReducers({});

// Pass in any initial state you want
const initialState = {};

// Array to add more middleware as needed
const middleware = [thunk];

// Create store with above content
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
