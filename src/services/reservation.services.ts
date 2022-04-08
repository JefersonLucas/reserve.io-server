import { Reservation } from '@types'
import { DeleteResult } from 'mongodb'
import { UpdateWriteOpResult } from 'mongoose'
import ReservationRepository from '@repositories/reservation.repositories'

async function createReservation (reservation: Reservation) {
  return await ReservationRepository.createReservation(reservation)
}

async function getReservations (): Promise<Reservation[]> {
  return await ReservationRepository.getReservations()
}

async function getReservation (id: string): Promise<Reservation> {
  return await ReservationRepository.getReservation(id)
}

async function updateReservation (id: string, reservation: Reservation): Promise<UpdateWriteOpResult> {
  return await ReservationRepository.updateReservation(id, reservation)
}

async function deleteReservation (id: string): Promise<DeleteResult> {
  return await ReservationRepository.deleteReservation(id)
}

export default {
  createReservation,
  getReservations,
  getReservation,
  updateReservation,
  deleteReservation
}
