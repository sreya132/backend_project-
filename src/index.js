// import dotenv from 'dotenv'

// dotenv.config({
//     path: './env'
// })

// require ('dotenv').config()
import connectDB from "./db/index.js";


 import dotenv from "dotenv";
 dotenv.config();


connectDB()
 .then(() => console.log("Database connection successful"))
 .catch((err) => console.error("Connection failed", err));




/*
import express from"express;
const app = express()

;( async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error)=>{
        console.log("error now");
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`app is listening on port ${process.env.PORT}`);
       })
    }catch(err){
        console.error("error",err));
        throw err
    }
})()
*/


