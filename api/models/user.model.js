import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
    user:{
        type: String,
        required:true,
        unique: true,
        
    },
    email:{
        type: String,
        required:true,
        unique: true,
        
    },
    Password:{
        type: String,
        required:true,
    
        
    }

},{timestamps:true});


///create the model
const User = mongoose.model('User',userSchema)

export default User;