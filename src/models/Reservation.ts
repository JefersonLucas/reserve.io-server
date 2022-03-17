import { Schema, model } from 'mongoose'
import { Reservation } from '@types'

const reservationSchema = new Schema<Reservation>({
  status: String,
  requester: String,
  date: Date,
  place: String,
  entry_time: String,
  exit_time: String
})

const ReservationModel = model<Reservation>('Reservation', reservationSchema)

export default ReservationModel
