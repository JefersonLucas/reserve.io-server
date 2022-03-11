import express from 'express'

import UserController from '@controllers/user.controllers'

const routes = express.Router()

routes.post('/create', UserController.createUser)
routes.get('/', UserController.getUsers)
routes.get('/:id', UserController.getUser)

export default routes
