import Express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
dotenv.config();

const app = Express();

app.use(Express.json());

mongoose.connect(process.env.MONGO).then(()=>{
    console.log("db connected")
}).catch((err)=>{
console.log(err)
})


app.listen(
    3000, ()=>{
        console.log("Server Listening on port 3000!")
    }

)

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


