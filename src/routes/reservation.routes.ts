import express from 'express'

import ReservationController from '@controllers/reservation.controllers'
import authorization from '@middlewares/authorization'

const routes = express.Router()

routes.post('/register', authorization, ReservationController.createReservation)
routes.get('/', authorization, ReservationController.getReservations)
routes.get('/:id', authorization, ReservationController.getReservation)
routes.delete('/:id', authorization, ReservationController.deleteReservation)

export default routes
