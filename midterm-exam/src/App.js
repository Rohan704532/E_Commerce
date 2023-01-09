import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom"
import Items from "./Components/Item/Item"
import Electronics from "./Components/Electronics/Electronics"
import Jewellery from "./Components/Jewellery/Jewellery"
import Mens from "./Components/Men's clothing/Men-clothing"
import SignUp from "./Components/Sign_up/Sign_up"
import Login from "./Components/Login/Login"
import Cart from "./Components/Cart/Cart"
import { useState } from "react";
import Top from "./Components/Top/Top"
import Women from "./Components/Women-clothing/Women"
import Details from "./Components/Detail/Detail"
import Favourites from "./Components/Favpurites/Favourites"

function App() {

    const [cart,setCart] = useState([]);

  function addToCart(para){
  
    if(cart.includes(para)){
      cart.splice(cart.indexOf(para),1)
    }else{
      cart.push(para)
    }
    setCart([...cart])
    
}


const [Detail, setDetails] = useState([]);

function showDetails(params){
  setDetails(params)
  console.log(Detail)
}

const [Favorite,setFavorites] = useState([]);

function addToFavorites(params){
  if(Favorite.includes(params)){
    Favorite.splice(Favorite.indexOf(params),1)
  }else{
    Favorite.push(params)
  }

  setFavorites([...Favorite])
  console.log(Favorite)
}

    return (
        <>
        <Top noItem={cart.length}/>
        <Routes>
            <Route path="/" element={<Items Detail={Detail} showDetails={showDetails} Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Electronics" element={<Electronics Detail={Detail} showDetails={showDetails} Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Jewellery" element={<Jewellery Detail={Detail} showDetails={showDetails} Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/men clothing" element={<Mens Detail={Detail} showDetails={showDetails} Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Women clothing" element={<Women Detail={Detail}showDetails={showDetails} Favorite={Favorite} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Sign_up" element={<SignUp />}></Route>
            <Route path='/favorites' element={ <Favourites Detail={Detail} showDetails={showDetails} Favorite={Favorite} cart={cart} addToFavorites={addToFavorites} addToCart={addToCart}/>} ></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Cart" element={<Cart cart={cart} addToCart={addToCart} />}></Route>
            <Route path="/Detail" element={<Details cart={cart} showDetails={showDetails} Favorite={Favorite} addToFavorites={addToFavorites} Detail={Detail}addToCart={addToCart}/>}></Route>
        </Routes>
        </>
    )
}

export default App