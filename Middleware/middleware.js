const JWTService = require("../CommonLib/JWTtoken")

function isValidToken(req,res,next){
    console.log("is in validToken function")
    const token = req.headers.token;
    const response = JWTService.verifyToken(token);
    console.log(response);
    next();
} 

module.exports = {
    isValidToken
}