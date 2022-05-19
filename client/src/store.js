import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import { cartReducer } from "./reducers/cartReducer";
import { loginUserReducer, registerUserReducer } from "./reducers/userReducer";

const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  cartReducer: cartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer : loginUserReducer
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartReducer: {
    cartItems: cartItems,
  },
};

const composeEnhancer = composeWithDevTools({});

const store = createStore(
  finalReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
