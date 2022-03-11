import express from 'express'

import UserController from '@controllers/user.controllers'
import authorization from '@middlewares/authorization'

const routes = express.Router()

routes.post('/register', UserController.createUser)
routes.post('/login', UserController.login)
routes.get('/', authorization, UserController.getUsers)
routes.get('/:id', authorization, UserController.getUser)
routes.put('/update/:id', authorization, UserController.updateUser)
routes.delete('/delete/:id', authorization, UserController.deleteUser)

export default routes
