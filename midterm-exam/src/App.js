import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from "react-router-dom"
import All from "./Components/Item/Item"
import Electronics from "./Components/Electronics/Electronics"
import Jewellery from "./Components/Jewellery/Jewellery"
import Mens from "./Components/Men's clothing/Men-clothing"
import Sign_Up from "./Components/Sign_up/Sign_up"
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
  setDetails(...Detail)
}

const [favs,setFavorites] = useState([]);
function addToFavorites(params){
       
  if(favs.includes(params)){
    favs.splice(favs.indexOf(params),1)
  }else{
    favs.push(params)
  }

  setFavorites([...favs])
  console.log(favs)
}

    return (
        <>
        <Top noItem={cart.length}/>
        <Routes>
            <Route path="/" element={<All Favorite={favs} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Electronics" element={<Electronics Favorite={favs} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Jewellery" element={<Jewellery Favorite={favs} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/men clothing" element={<Mens Favorite={favs} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Women clothing" element={<Women Favorite={favs} addToFavorites={addToFavorites} cart={cart} addToCart={addToCart}/>}></Route>
            <Route path="/Sign_up" element={<Sign_Up />}></Route>
            <Route path='/favorites' element={ <Favourites Favorite={favs} cart={cart} addToFavorites={addToFavorites} addToCart={addToCart}/>} ></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Cart" element={<Cart cart={cart} addToCart={addToCart} />}></Route>
            <Route path="/Detail" element={<Details cart={cart} showDetails={showDetails} Favorite={favs} addToFavorites={addToFavorites} addToCart={addToCart}/>}></Route>
        </Routes>
        </>
    )
}

export default App