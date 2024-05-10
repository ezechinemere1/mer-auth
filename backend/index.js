import Express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import { error } from "console";
dotenv.config();

const app = Express();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected")
}).catch((error)=>{
console.log(error)
})


app.listen(
    3000, ()=>{
        console.log("Server Listening on port 3000!")
    }
)