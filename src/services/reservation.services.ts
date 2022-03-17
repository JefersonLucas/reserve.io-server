import ReservationRepositories from '@repositories/reservation.repositories'
import { Reservation } from '@types'

async function createReservation (reservation: Reservation) {
  return await ReservationRepositories.createReservation(reservation)
}

export default {
  createReservation
}
