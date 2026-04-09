// Middleware to create and/or verify JWT token
const jwt =  require("jsonwebtoken");
const CustomError = require("../utils/customError");

const JWT_SECRET = "TimbaSecret";

function authMiddleware(req,res,next){
    try{
        const authHeader = req.Headers.authorization;
        const tokenFromHeader = authHeader && authHeader.startsWith("Bearer")?authHeader.split(" ")[1]:null;

        const token = tokenFromHeader || req.cookies.token;

        if (!token) {
            return next (new CustomError("Access denied.Token not provided",404));
        }

        const decoded = jwt.verify(token,JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(error){
        next (new CustomError("Access denied.Token not provided",404));
    }
}

module.exports = {
    authMiddleware,
    JWT_SECRET
};