import mongoose from "mongoose";


// creating a schema or row in sql
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


///create the model or table in sql
const User = mongoose.model('User',userSchema)

export default User;