const {Router} = require('express')
const jobRoutes = Router()
const {JobController} = require('../../controllers')
const authentication = require('../../middlewares/authentication')

// jobRoutes.get("/", JobController.index)

jobRoutes.get("/testing", JobController.test)
// jobRoutes.get("/", JobController.jobLists)
// jobRoutes.get("/detail/:id", JobController.detail)

jobRoutes.get("/", authentication, JobController.jobLists)
jobRoutes.get("/detail/:id", authentication, JobController.detail)


module.exports = jobRoutes;
