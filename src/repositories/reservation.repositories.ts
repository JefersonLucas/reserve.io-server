import { DeleteResult } from 'mongodb'
import { UpdateWriteOpResult } from 'mongoose'
import { Reservation } from 'types'
import ReservationModel from '@models/Reservation'

async function createReservation (reservation: Reservation): Promise<Reservation> {
  return await ReservationModel.create(reservation)
}

async function getReservations (): Promise<Reservation[]> {
  return await ReservationModel.find()
}

async function getReservation (id: string): Promise<Reservation> {
  return await ReservationModel.findById(id)
}

async function updateReservation (id: string, reservation: Reservation): Promise<UpdateWriteOpResult> {
  return await ReservationModel.updateOne({ _id: id }, reservation)
}

async function deleteReservation (id: string): Promise<DeleteResult> {
  return await ReservationModel.deleteOne({ _id: id })
}

export default {
  createReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation
}
