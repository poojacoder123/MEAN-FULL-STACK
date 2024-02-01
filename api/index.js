import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
const app = express();
dotenv.config()


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