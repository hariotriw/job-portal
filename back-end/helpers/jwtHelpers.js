const jwt = require('jsonwebtoken')
const secret = process.env.SECRET_CODE || "secret";

const tokenGenerator = (data) => {
    const {id, name, username, email} = data
    return jwt.sign({
        id, name, username, email
    }, 
    secret,
    {
        expiresIn: "1h"
    })
}

const tokenVerifier = (data, secret) => {
    return jwt.verify(data, secret)
}

module.exports = {
    tokenGenerator, tokenVerifier
}