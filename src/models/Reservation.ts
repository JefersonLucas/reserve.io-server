import { Schema, model } from 'mongoose'
import { Reservation } from '@types'

const ReservationSchema = new Schema<Reservation>({
  requester: String,
  equipment: String,
  status: String,
  date: String,
  place: String,
  entry_time: String,
  exit_time: String,
  observation: String
})

const ReservationModel = model<Reservation>('Reservation', ReservationSchema)

export default ReservationModel
