import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';// fro user cookie validation for using tokens 



export const signup = async (req,res,next) => {
    const { username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10); 
    const newUser = new User({ username, email, password: hashedPassword});
    try {
        await newUser.save()
        res.status(201).json("user created succesfully")
        
    } catch (error) {
        next(error); 
        
    }
        
 
};

// export const signin = async (req, res, next) => {
//     const { email, password } = req.body; // <-- Extract email
//     try {
//         const validUser = await User.findOne({ email }); ///we are searching for the email from our database to see if they registered before
//         if (!validUser) return next(errorHandler(404, 'User not found'));

//         const validPassword = bcryptjs.compareSync(password, validUser.password);
//         if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));

//         const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);//the secret key  is a random api i created
//         const { password:pass, ...rest } = validUser// tjis line is so that we do not send the password to the user so we destrusture it and send all the data back except the password 
//         res.cookie('access_token', token, { httpOnly: true })// we are sving the token as a cookie
//            .status(200)
//            .json(validUser); 

//     } catch (error) {
//         next(error); 
//     }
// }; in this code ther was a problem becuase i t still returned the password to the client side so we turned the mongoose document to plain javascript befor destructuring it fo thr response
export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        // Convert Mongoose document to plain JavaScript object before destructuring
        const userObject = validUser.toObject(); // or use `.lean()` in the query
        const { password: pass, ...rest } = userObject; 

        res.cookie('access_token', token, { httpOnly: true })
           .status(200)
           .json(rest); // Send everything except password

    } catch (error) {
        next(error);
    }
};

