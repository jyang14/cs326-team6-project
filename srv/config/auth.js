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

module.exports = { jwtCheck }
