import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import routes from './routes/roleRoutes.js';
const app = express();
dotenv.config()
app.use(express.json());

const mongoDB = async ()=>{
    try {
        await mongoose.connect(process.env.mongo_url)
        console.log("conneted to db")
    }
    catch(error){
  throw error
    }
}

app.use("/api/role", routes)

app.listen(8800,()=>{
    console.log("server running")
    mongoDB()
})