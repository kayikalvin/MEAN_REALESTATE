/// used to hide the user logic from user.routes.js for best practices
export const test =(req,res) =>{
    res.json({
        message:"api is working "
    })
};