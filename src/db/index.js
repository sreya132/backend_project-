import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//import { error } from "ajv/dist/vocabularies/applicator/dependencies";

const connectDB = async() => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(connectionInstance);
        
        console.log(`\n MongoDB connected ${connectionInstance.connection.host}`);
        
    }catch(error){
        console.log("mongodb connection error", error);
        process.exit(1) //async work thakle oo forceing to complete the process
        
    }
}

export default connectDB