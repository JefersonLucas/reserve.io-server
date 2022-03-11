import { DeleteResult } from 'mongodb'
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

async function getUserEmail(string: string): Promise<User> {
	return await UserRepository.getUserEmail(string)
}

async function updateUser(
	id: string,
	user: User
): Promise<UpdateWriteOpResult> {
	return await UserRepository.updateUser(id, user)
}

async function deleteUser(id: string): Promise<DeleteResult> {
	return await UserRepository.deleteUser(id)
}

export default {
	createUser,
	getUsers,
	getUser,
	getUserEmail,
	updateUser,
	deleteUser
}
