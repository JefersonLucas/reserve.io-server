import { DeleteResult } from 'mongodb'
import { UpdateWriteOpResult } from 'mongoose'
import { User } from 'types'
import UserModel from '@models/User'

async function createUser(user: User): Promise<User> {
	return await UserModel.create(user)
}

async function getUsers(): Promise<User[]> {
	return await UserModel.find()
}

async function getUser(id: string): Promise<User> {
	return await UserModel.findOne({ _id: id })
}

async function updateUser(
	id: string,
	user: User
): Promise<UpdateWriteOpResult> {
	return await UserModel.updateOne({ _id: id }, user)
}

async function deleteUser(id: string): Promise<DeleteResult> {
	return await UserModel.deleteOne({ _id: id })
}

export default {
	createUser,
	getUsers,
	getUser,
	updateUser,
	deleteUser
}
