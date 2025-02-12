import mongoose from "mongoose";
import dotenv from "dotenv";

const connectDB = async ()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/BookMyDoc`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        
    }catch(error){
        console.log("MONGODB connection failed", error);
        process.exit(1)
    }
}

export default connectDB