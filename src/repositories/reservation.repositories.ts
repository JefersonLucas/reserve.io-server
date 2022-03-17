import { Reservation } from 'types'
import ReservationModel from '@models/Reservation'

async function createReservation (reservation: Reservation): Promise<Reservation> {
  return await ReservationModel.create(reservation)
}

async function getReservations (): Promise<Reservation[]> {
  return await ReservationModel.find()
}

export default {
  createReservation,
  getReservations
}
