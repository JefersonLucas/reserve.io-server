import ReservationRepository from '@repositories/reservation.repositories'
import { Reservation } from '@types'

async function createReservation (reservation: Reservation) {
  return await ReservationRepository.createReservation(reservation)
}

async function getReservations (): Promise<Reservation[]> {
  return await ReservationRepository.getReservations()
}

export default {
  createReservation,
  getReservations
}
