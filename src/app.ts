import express from 'express'
import cors from 'cors'

import ReservationRoutes from '@routes/reservation.routes'
import UserRoutes from '@routes/user.routes'

const app = express()

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  })
)

app.use('/reservations', ReservationRoutes)
app.use('/users', UserRoutes)

export default app
