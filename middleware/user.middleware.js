require("dotenv").config();
const jsonwebtoken = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            message : "token tidak ada"
        })
    }

    const decode = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    req.id = decode.id;
    next()
};
