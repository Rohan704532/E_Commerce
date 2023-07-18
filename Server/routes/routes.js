import express from 'express'
import { signUp,login,authenticateJwt,fav,unFav,getFav,cart } from '../controller/e-commerce-controller.js';

const route = express.Router();
route.post('/signUp',signUp)
route.post('/login',login)
route.post('/fav',authenticateJwt,fav)
route.delete('/unFav/:id',unFav)
route.get('/getFav',getFav)
route.post('/cart',cart)
export default route