import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Render from './Render';
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import rootReducer from "./Components/Reducers/index"

const store = configureStore(rootReducer)
console.log("store data", store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Render />
  </Provider>

);


reportWebVitals();
