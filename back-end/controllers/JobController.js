const { User, UserCv } = require('../models')
const bcrypt = require('bcrypt')
const axios = require('axios')
const jwt = require('../helpers/jwtHelpers')
const { v4: uuidv4 } = require('uuid')

class JobController {
    static async index(req, res) {
        try{
            
            res.status(201).json('test')
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async test(req, res) {
        try{
            console.log('testing')
            let frontUrl = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
            console.log(frontUrl)
            var backUrl = new URL("http://dev3.dansmultipro.co.id/api/recruitment/positions.json")
            backUrl.search = frontUrl.search;
            console.log(backUrl)
            console.log(backUrl.href)
            let data = await axios({
                method: 'GET',
                url: backUrl.href,
                timeout: 120000,
            })
            res.status(200).json(data.data)

        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async detail(req, res) {
        try{
            let userData = req.userData
            // console.log(userData)
            // console.log('testing')
            let id = req.params.id
            let base_url = `http://dev3.dansmultipro.co.id/api/recruitment/positions`
            let newUrl = `${base_url}/${id}`
            let data = await axios({
                method: 'GET',
                url: newUrl,
                timeout: 120000,
            })
            // console.log(data.data)
            res.status(200).json(data.data)

        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async jobLists(req, res) {
        try{
            // console.log('testing')
            console.log(req.headers);
            let frontUrl = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`)
            // console.log(frontUrl)
            var backUrl = new URL("http://dev3.dansmultipro.co.id/api/recruitment/positions.json")
            backUrl.search = frontUrl.search;
            // console.log(backUrl)
            // console.log(backUrl.href)
            let data = await axios({
                method: 'GET',
                url: backUrl.href,
                timeout: 120000,
            })
            res.status(200).json(data.data)

        } catch (err) {
            res.status(500).json(err)
        }
    }
}

module.exports = JobController;