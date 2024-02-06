import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/roleRoutes.js';
import AuthRoutes from './routes/authRoutes.js'


const app = express();
dotenv.config()
app.use(express.json());
app.use("/api/role", routes)
app.use("/api", AuthRoutes);

app.use((err,req,res,next)=>{
const statusCode = err.status ||500;
const errMessage = err.errMessage ||"something wnet wrong pooja";
return res.status(statusCode).json({
    success: false,
    status : statusCode,
    message : errMessage,
    stack : err.stack
})
})

app.use((obj,req,res,next)=>{
    const statusCode = obj.status;
    const successMessage = obj.successMessage ||"Succeess :true";
    return res.status(statusCode).json({
        success: [200,201,204].some(a=> a===obj.status ? true : false),
        status : statusCode,
        message : successMessage,
        stack : obj.stack,
        data : obj.data
    })
    })

const mongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log("conneted to db")
    }
    catch(error){
  throw error
    }
}

app.listen(8800,()=>{
    console.log("server running")
    mongoDB()
})