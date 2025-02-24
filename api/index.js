import express from 'express'
import mongoose from 'mongoose'; //used to connect to a database
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config();

mongoose.connect(process.env.MONGO_DB).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err);
})

const app = express();


///we get undefined in theserver because we are not allowed to send json by default
app.use(express.json()); /// allows us to send json

app.listen(3000,() => { 
    console.log('Server is running on port 3000 .....') 
});
app.get('/',(req,res) => {
    res.send('hello world')
})


app.use('/api/user',userRouter);
app.use('/api/auth', authRouter);

///middleware to handle errors
app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500; // herre we will return the erro that occured in the clients side if not we return status code 500
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        succuss:false,
        statusCode,
        message,
    });
});
