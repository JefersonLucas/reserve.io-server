import { Reservation } from 'types'
import ReservationModel from '@models/Reservation'

async function createReservation (reservation: Reservation): Promise<Reservation> {
  return await ReservationModel.create(reservation)
}

export default {
  createReservation
}
