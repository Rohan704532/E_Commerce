import {Login_E} from "../model/e_commerce.js"
import {Item_E,Cart_E} from "../model/e_commerce.js"
import Jwt from "jsonwebtoken"
import SECRET from "../index.js"

export const authenticateJwt = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        Jwt.verify(token, SECRET,(err,user)=>{
            if(err){
                return res.sendStatus(403)
            }
            req.user=user
            next();
        })
    }else{
        res.sendStatus(401)
    }
}

export const signUp = async(req,res)=>{
    const {First_Name, Last_Name, Email, Password} = req.body;
    const user = await Login_E.findOne({Email});
    if(user){
        res.status(403).json({message:"user already exists"})
    }else{
        const newUser = new Login_E({First_Name, Last_Name,Email, Password})
        await newUser.save()
        const token = Jwt.sign({Email, role:'user'}, SECRET,{expiresIn:'1h'})
        res.json({message:"User Created Successfully", token})
    }
}

export const login = async (req, res) => {
    const { Email, Password } = req.body;
    const found = await Login_E.findOne({ Email, Password });
    if (found) {
        const token = Jwt.sign({ Email, role: 'user' }, SECRET, { expiresIn: '1h' })
        res.json({ message: "Logged in successfully", token });
    } else {
        res.status(403).json({ message: 'Invalid username or password' })
    }
}

export const fav = async (req,res)=>{
    const {title, price,description,image,rating,id} = req.body
    const newItem = new Item_E({title, price,description,image,rating,id})
    await newItem.save()
    res.json({message:"Item added successfully",Item:title})
}

export const cart = async (req,res)=>{
    const {title, price,description,image,rating,id} = req.body
    const newItem = new Cart_E({title, price,description,image,rating,id})
    await newItem.save()
    res.json({message:"Item added successfully",Item:title})
}

export const unFav = async(req,res)=>{
    const delFav = await Item_E.deleteOne({id:req.params.id})
    return res.status(200).json(delFav)
}

export const getFav = async(req,res)=>{
    const item = await Item_E.find({})
    res.status(200).json({success:true, item})
}