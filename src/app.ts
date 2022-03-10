import express from 'express'

import ReservationRoutes from '@routes/reservation.routes'
import UserRoutes from '@routes/user.routes'

const app = express()

app.use(
	express.urlencoded({
		extended: true
	})
)

app.use(express.json())

app.use('/', ReservationRoutes)
app.use('/users', UserRoutes)

export default app
