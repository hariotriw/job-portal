const { tokenVerifier } = require("../helpers/jwtHelpers")

const authentication = (req, res, next) => {
    // console.log('authentication 1');
    const token = req.headers.access_token
    // console.log('authentication 2');
    
    if(token){
        try {
            // console.log('authentication 3.a');
            // console.log(token);
            let verifyToken = tokenVerifier(token, 'secret')
            req.userData = verifyToken
            // console.log('authentication 4.a');
            next()
            
        } catch (err) {
            // console.log('authentication 3.b');
            res.status(403).json({
                message: "token not verified"
            })
        }
    } else {
        // console.log('authentication 4.b');
        res.status(403).json({
            message: "token not found"
        })
    }
}

module.exports = authentication;