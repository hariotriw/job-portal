const { User, UserCv } = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('../helpers/jwtHelpers')
// const { v4: uuidv4 } = require('uuid')

class AuthController {
    static async register(req, res) {
        try{
            const {name, username, email, password, repassword} = req.body
            const hashPwd = bcrypt.hashSync(password, 10)

            let user = await User.create({
                name, username, email, password:hashPwd
            })
            res.status(201).json(user)

        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async login(req, res) {
        try{
            console.log('masuk ke login controller')
            const {username, password} = req.body
            // console.log(req.body)
            let user = await User.findOne({
                where: {
                    username
                }
            })
            // console.log(user)

            if(user){
                if(bcrypt.compareSync(String(password) , user.password)){
                    let access_token = jwt.tokenGenerator(user)
                    // let verifyToken = jwt.tokenVerifier(access_token, user.password)
                    // localStorage.setItem('access_token', access_token)
                    res.json(access_token)
                    // res.json(verifyToken)
                } else {
                    res.status(403).json({
                        message: 'Please insert the right password'
                    })
                }

            } else {
                res.status(404).json({
                    message: 'email not found'
                })
            }
            // res.json(user)
            // console.log(user)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    
    static async logout(req, res) {
        try{
            // const {username, name, email, password} = req.body
            // localStorage.clear()
            // let user = await
        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = AuthController;