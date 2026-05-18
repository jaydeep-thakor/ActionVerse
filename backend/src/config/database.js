import mongoose from "mongoose"
import config from "./config.js";

const connectDB = async () => {
    
    await mongoose.connect(config.DATABASE_URI)
    .then(()=>{
        console.log("database connected successfully ✅");
    }).catch((error)=>{
        console.log("error connecting database ❌", error);
    })

}

export default connectDB;
