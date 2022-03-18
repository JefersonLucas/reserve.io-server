/* eslint-disable no-tabs */
/* eslint-disable camelcase */
import { Types } from 'mongoose'

export type Status = 'waiting' | 'using' | 'collected'
export interface User {
	_id?: Types.ObjectId
	username: string
	email: string
	password: string
}

export interface Reservation {
	_id?: Types.ObjectId
	status: Status
	requester: string
	date: string
	place: string
	entry_time: string
	exit_time: string
}
