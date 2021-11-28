import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authReducers";
import { commentReducers, postReducer } from "./reducers/postReducers";
import { userDetailsReducer } from "./reducers/userReducers";

const reducer = combineReducers({
  auth: authReducer,
  posts: postReducer,
  comments: commentReducers,
  user: userDetailsReducer,
});

let initialState = {};

const middlware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlware))
);

export default store;
