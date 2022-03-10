import express from 'express'

import { RouterPros } from './types'

const routes = express.Router()

routes.get<RouterPros>('/', (_, res) => {
	return res.send({ message: 'Hello World!' })
})

export default routes
