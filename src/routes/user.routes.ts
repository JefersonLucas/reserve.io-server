import express from 'express'

import UserController from '@controllers/user.controllers'

const routes = express.Router()

routes.post('/create', UserController.createUser)
routes.get('/', UserController.getUsers)

export default routes
