import mongoose from "mongoose"

const loginSchema = new mongoose.Schema({
    First_Name:String,
    Last_Name:String,
    Email:String,
    Password:String
})

const itemSchema = new mongoose.Schema({
    id:String,
    title:String,
    price:String,
    image:String,
    description:String,
    Rating:Object,
})

const cartSchema = new mongoose.Schema({
    id:String,
    title:String,
    price:String,
    image:String,
    description:String,
    Rating:Object,
})

const Login_E = mongoose.model('Login',loginSchema)
const Item_E = mongoose.model("Item", itemSchema)
const Cart_E = mongoose.model("Cart", cartSchema)

export {Login_E, Item_E,Cart_E}