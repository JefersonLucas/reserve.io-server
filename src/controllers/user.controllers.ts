import { Request, Response } from 'express'

import { User } from '@types'
import UserService from '@services/user.services'

async function createUser(req: Request, res: Response): Promise<void> {
	try {
		const { username, email, password } = req.body

		if (!username) throw new Error('username field is required')

		if (!email) throw new Error('email field is required')

		if (!password) throw new Error('password field is required')

		const user: User = {
			username,
			email,
			password
		}

		await UserService.createUser(user)

		res.status(201).json(user)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

async function getUsers(_: Request, res: Response): Promise<void> {
	try {
		const users = await UserService.getUsers()

		res.status(201).json(users)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export default {
	createUser,
	getUsers
}
