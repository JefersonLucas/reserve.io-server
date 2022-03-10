import express from 'express'

const routes = express.Router()

routes.get('/', (_, res) => {
	return res.send({ message: 'Hello World!' })
})

export default routes
