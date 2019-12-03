// require jwt, helper, User, List
var jwt = require('jwt-simple')
var helper = require('../config/helpers.js')
var User = require('../orms/userModel.js')

module.exports = {
  // signin method
  signin: function (req, res) {
    /* TODO: Fill up signin function that checks
     the validity of username and password by checking the database
    */
    const UserObj = req.body
    User.where('username')
      .equals(UserObj.username)
      .where('password')
      .equals(UserObj.password)
      .exec(function (err, user) {
        // User.find(UserObj).exec(function (err, user) {
        if (err) {
          console.log('signin err:', err)
          helper.sendError(err, req, res)
        }
        if (Array.isArray(user) && user.length === 1) {
          const token = jwt.encode(user, 'secret')
          res.json({
            token: token,
            abc: 'correct',
            users: user
          })
        } else {
          console.log('incorrect username or passwoard')
          const token = jwt.encode(user, 'secret')
          res.json({
            token: token,
            abc: 'incorrect',
            users: user
          })
        }
      })
  },

  /*
    This function will help to add an users to database
    Consider using POSTMAN to send requests to this function
  */
  signup: function (req, res) {
    const newUserObj = req.body
    User.create(newUserObj, function (err, user) {
      console.log(user)
      if (err) {
        // notifies if error is thrown
        console.log('mongo create user err: ', err)
        helper.sendError(err, req, res)
      } else {
        // signup success, assigns jwt session token
        var token = jwt.encode(user, 'secret')
        res.json({
          token: token, // session token will be set on client side
          // userid also returned.  This should be assigned to a cookie also so that it is available for future server requests and db queries.
          userid: user.id
          // anything else to send back on success?
        })
      }
    })
  }
}
