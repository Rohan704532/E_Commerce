import React from 'react';
import ReactDOM from 'react-dom/client';
import './Render.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import Electronics from "./Components/Electronics/Electronics"
import Jewellery from "./Components/Jewellery/Jewellery"
import Mens from "./Components/Men's clothing/Men-clothing"
import Sign_up from "./Components/Sign_up/Sign_up"
import Login from "./Components/Login/Login"

function Render(){
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Electronics" element={<Electronics />}></Route>
        <Route path="/Jewellery" element ={<Jewellery />}></Route>
        <Route path="/men's clothing" element={<Mens />}></Route>
        <Route path="/Sign_up" element={<Sign_up/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
};


export default Render
