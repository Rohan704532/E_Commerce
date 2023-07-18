import express from 'express'
import Connection from './database/db.js';
import Routes from './routes/routes.js';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import cors from "cors"

const PORT = 3000
const SECRET = 'SECr3t'
const app = express();
app.use(cookieParser());
app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',Routes);
Connection()
app.listen(PORT,()=>{
    console.log("Server is running")
})


export default SECRET