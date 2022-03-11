import { User } from 'types'
import UserModel from '@models/User'

async function createUser(user: User): Promise<User> {
	return await UserModel.create(user)
}

async function getUsers(): Promise<User[]> {
	return await UserModel.find()
}

export default {
	createUser,
	getUsers
}
