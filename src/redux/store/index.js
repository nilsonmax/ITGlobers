import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from '../reducer/instrumentsReducers.js'
import thunk from "redux-thunk";
import reducer from "../reducer/index";

// import { createStore, applyMiddleware, compose } from "redux";


// const cartItems = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];
// const favoriteItems = localStorage.getItem("favoriteItems")
//   ? JSON.parse(localStorage.getItem("favoriteItems"))
//   : [];
// const initState = {
//   cart: { items: cartItems },
//   favorites: { items: favoriteItems },
// };
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = legacy_createStore(
  reducer,
//   initState,
  composeWithDevTools(applyMiddleware(thunk))
  // composeEnhancer(applyMiddleware(thunk))
);
export default store;