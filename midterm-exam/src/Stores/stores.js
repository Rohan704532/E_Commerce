import ShopApp from "../Components/Reducers/addRemoceCart";
import {createStore, applyMiddleware} from "redux"
import thunkMiddleware from "redux-thunk"

const store = createStore(ShopApp, applyMiddleware(thunkMiddleware))

export default store;