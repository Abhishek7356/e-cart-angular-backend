
const JWT = require('jsonwebtoken');

const JWTMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.token.split(' ')[1];
        console.log("inside jwt middle")
        console.log(token)
        // console.log(process.env.JWT_KEY)
        const jwtResponse = JWT.verify(token, process.env.JWT_KEY)
        console.log(jwtResponse)
        req.payload = jwtResponse
        next()
    } catch (err) {
        res.status(503).json("JWT web token is invalid")
    }
}

module.exports = JWTMiddleware