import { UpdateWriteOpResult } from 'mongoose'
import { User } from 'types'

import UserRepository from '@repositories/user.repositories'

async function createUser(user: User): Promise<User> {
	return await UserRepository.createUser(user)
}

async function getUsers(): Promise<User[]> {
	return await UserRepository.getUsers()
}

async function getUser(id: string): Promise<User> {
	return await UserRepository.getUser(id)
}

async function updateUser(
	id: string,
	user: User
): Promise<UpdateWriteOpResult> {
	return await UserRepository.updateUser(id, user)
}

export default {
	createUser,
	getUsers,
	getUser,
	updateUser
}
