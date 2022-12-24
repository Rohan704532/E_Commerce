import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom"
import All from "./Components/All/All"
import Electronics from "./Components/Electronics/Electronics"
import Jewellery from "./Components/Jewellery/Jewellery"
import Mens from "./Components/Men's clothing/Men-clothing"
import Sign_Up from "./Components/Sign_up/Sign_up"
import Login from "./Components/Login/Login"
import Cart from "./Components/Cart/Cart"
import { useState } from "react";
import Top from "./Components/Top/Top"

function App() {

    const [cart,setCart] = useState([]);

  function addToCart(para){
  
    if(cart.includes(para)){
      cart.splice(cart.indexOf(para),1)
    }else{
      cart.push(para)
    }
    setCart([...cart])
    console.log(cart)
    
}

const [Favorate,setFavorites] = useState([]);

function addToFavorites(params){
       
  if(Favorate.includes(params)){
    Favorate.splice(Favorate.indexOf(params),1)
  }else{
    Favorate.push(params)
  }

  setFavorites([...Favorate])
  console.log(Favorate)
  // setHeart(heart)
}

    return (
        <>
        <Top/>
        <Routes>
            <Route path="/" element={<All Favorite={Favorate} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Electronics" element={<Electronics />}></Route>
            <Route path="/Jewellery" element={<Jewellery />}></Route>
            <Route path="/men's clothing" element={<Mens />}></Route>
            <Route path="/Sign_up" element={<Sign_Up />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
        </>
    )
}

export default App