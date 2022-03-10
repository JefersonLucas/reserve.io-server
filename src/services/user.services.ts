import { User } from 'types'

import UserRepository from '@repositories/user.repositories'

async function createUser(user: User): Promise<User> {
	return await UserRepository.createUser(user)
}

export default {
	createUser
}
