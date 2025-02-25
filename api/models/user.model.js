import mongoose from "mongoose";


// creating a schema or row in sql
const userSchema =  new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true,
        
    },
    email:{
        type: String,
        required:true,
        unique: true,
        
    },
    password:{
        type: String,
        required:true,

    },
    avatar:{
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
      },

},{timestamps:true});


///create the model or table in sql
const User = mongoose.model('User',userSchema)

export default User;