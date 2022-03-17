/* eslint-disable camelcase */
import { Request, Response } from 'express'

import { Reservation } from '@types'

import ReservationService from '@services/reservation.services'
import ReservationModel from '@models/Reservation'

async function createReservation (req: Request, res: Response): Promise<Reservation> {
  try {
    const {
      status,
      requester,
      date,
      place,
      entry_time,
      exit_time
    } = req.body

    if (!status) {
      res.status(422).json({ error: 'o campo de status é obrigatório.' })
      return
    }

    if (!requester) {
      res.status(422).json({ error: 'o campo do solicitante é obrigatório.' })
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
      status,
      requester,
      date,
      place,
      entry_time,
      exit_time
    })

    await ReservationService.createReservation(reservation)

    res.status(201).json({
      id: reservation._id,
      status,
      requester,
      date,
      place,
      entry_time,
      exit_time
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getReservations (_: Request, res: Response): Promise<Reservation[] | void> {
  try {
    const reservations = await ReservationService.getReservations()

    res.status(200).json(
      reservations.map(({ _id, status, requester, place, date, entry_time, exit_time }) => {
        return {
          id: _id,
          requester,
          status,
          place,
          date,
          entry_time,
          exit_time
        }
      })
    )
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default {
  createReservation,
  getReservations
}
