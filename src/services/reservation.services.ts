import ReservationRepository from '@repositories/reservation.repositories'
import { Reservation } from '@types'

async function createReservation (reservation: Reservation) {
  return await ReservationRepository.createReservation(reservation)
}

async function getReservations (): Promise<Reservation[]> {
  return await ReservationRepository.getReservations()
}

async function getReservation (id: string): Promise<Reservation> {
  return await ReservationRepository.getReservation(id)
}

export default {
  createReservation,
  getReservations,
  getReservation
}
