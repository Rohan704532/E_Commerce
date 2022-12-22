import {addToCart, removeFromCart} from "../constant"

export const addToCart = (data) =>{
    return {
        type:"addToCart",
        data:data
    }
}

export const removeFromCart = (data)=>{
    return{
        type : "removeFromCart",
        data:data
    }
}

export const getNumberCart=()=>{
    return{
        type:"getNumberCart"
    }
}