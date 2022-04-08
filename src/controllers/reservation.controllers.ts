/* eslint-disable camelcase */
import { Request, Response } from 'express'

import { Reservation } from '@types'

import ReservationService from '@services/reservation.services'
import ReservationModel from '@models/Reservation'

async function createReservation (req: Request, res: Response): Promise<Reservation> {
  try {
    const {
      requester,
      equipment,
      status,
      date,
      place,
      entry_time,
      exit_time,
      observation
    } = req.body

    if (!requester) {
      res.status(422).json({ error: 'o campo do solicitante é obrigatório.' })
      return
    }

    if (!equipment) {
      res.status(422).json({ error: 'o campo do equipamento é obrigatório.' })
      return
    }

    if (!status) {
      res.status(422).json({ error: 'o campo de status é obrigatório.' })
      return
    }

    if (!date) {
      res.status(422).json({ error: 'o campo de data é obrigatório.' })
      return
    }

    if (!place) {
      res
        .status(422)
        .json({ error: 'o campo do local é obrigatório.' })
      return
    }

    if (!entry_time) {
      res
        .status(422)
        .json({ error: 'o campo de horário de entrada é obrigatório.' })
      return
    }

    if (!exit_time) {
      res
        .status(422)
        .json({ error: 'o campo de horário de saída é obrigatório.' })
      return
    }

    const reservation = new ReservationModel({
      requester,
      equipment,
      status,
      date,
      place,
      entry_time,
      exit_time,
      observation
    })

    await ReservationService.createReservation(reservation)

    res.status(201).json({
      id: reservation._id,
      requester,
      equipment,
      status,
      date,
      place,
      entry_time,
      exit_time,
      observation
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getReservations (_: Request, res: Response): Promise<Reservation[] | void> {
  try {
    const reservations = await ReservationService.getReservations()

    res.status(200).json(
      reservations.map((reservation) => {
        return {
          id: reservation._id,
          requester: reservation.requester,
          equipment: reservation.equipment,
          status: reservation.status,
          place: reservation.place,
          date: reservation.date,
          entry_time: reservation.entry_time,
          exit_time: reservation.exit_time,
          observation: reservation.observation
        }
      })
    )
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getReservation (req: Request, res: Response): Promise<Reservation> {
  try {
    const { id } = req.params

    const reservation = await ReservationService.getReservation(id)

    if (!reservation) {
      res.status(422).json({ error: 'reserva não encontrada.' })
      return
    }

    res.status(200).json({
      id: reservation._id,
      requester: reservation.requester,
      equipment: reservation.equipment,
      status: reservation.status,
      place: reservation.place,
      date: reservation.date,
      entry_time: reservation.entry_time,
      exit_time: reservation.exit_time,
      observation: reservation.observation
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function deleteReservation (req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params

    const reservation = await ReservationService.getReservation(id)

    if (!reservation) {
      res.status(422).json({ error: 'reserva não encontrada.' })
      return
    }

    await ReservationService.deleteReservation(id)

    res.status(200).json({ message: 'reserva removida.' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default {
  createReservation,
  getReservations,
  getReservation,
  deleteReservation
}
