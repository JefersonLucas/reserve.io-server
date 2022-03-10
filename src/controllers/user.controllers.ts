import { Request, Response } from 'express'

import { User } from '@types'
import UserService from '@services/user.services'

async function createUser(req: Request, res: Response): Promise<void> {
	try {
		const { username, email, password } = req.body

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

export default {
	createUser
}
