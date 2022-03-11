import { Types } from 'mongoose'
export interface User {
	_id?: Types.ObjectId
	username: string
	email: string
	password: string
}
