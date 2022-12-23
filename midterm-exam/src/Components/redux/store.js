import {configureStore} from "@reduxjs/toolkit"
import rootReducer  from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension"

const store = configureStore(rootReducer, composeWithDevTools())

export default store;