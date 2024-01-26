const {userSigninSchema} = require('../type')
const { User } = require('../db')
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')

async function userAuth(req, res, next) {
    const { authorization } = req.headers;
    const word = authorization.split(" ");
    try {
      const user = jwt.verify(word[1], JWT_SECRET)
      if (user) {
        req.userId = user.userId;
        next()
      } else {
        res.status(403).json({
          message: "You don't have access"
        })
      }
    } catch (error) {
      res.status(403).json({
        message: error.message
      })
    }

}



module.exports = {userAuth}