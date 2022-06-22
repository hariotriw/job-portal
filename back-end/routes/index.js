const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.json('Ini Route Home');
})

// Api Routes
const authRoutes = require('./api/auth.js')
const userRoutes = require('./api/user.js')
route.use('/api/', authRoutes)
route.use('/api/users', userRoutes)

module.exports = route;