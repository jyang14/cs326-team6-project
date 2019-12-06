const axios = require('axios').default
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const secret = require('../secret')

const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${secret.auth0Domain}/.well-known/jwks.json`
  }),
  audience: secret.auth0Audience,
  issuer: `https://${secret.auth0Domain}/`,
  algorithms: ['RS256']
})

/**
 * @param {string} token
 * @return {Promise<string>}
 */
async function getUserIdFromToken (token) {
  return (
    await axios.get(`https://${secret.auth0Domain}/userinfo`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  ).data.sub
}

module.exports = { jwtCheck, getUserIdFromToken }
