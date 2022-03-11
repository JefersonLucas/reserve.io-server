import { Request, Response } from 'express'

import { User } from '@types'
import UserService from '@services/user.services'

async function createUser(req: Request, res: Response): Promise<User> {
	try {
		const { username, email, password } = req.body

		if (!username) {
			res.status(422).json({ error: 'campo nome de usuário é obrigatório.' })
			return
		}

		if (!email) {
			res.status(422).json({ error: 'campo de e-mail é obrigatório.' })
			return
		}

		if (!password) {
			res.status(422).json({ error: 'campo de senha é obrigatório.' })
			return
		}

		const user: User = { username, email, password }

		await UserService.createUser(user)

		res.status(201).json(user)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

async function getUsers(_: Request, res: Response): Promise<User[] | void> {
	try {
		const users = await UserService.getUsers()

		res.status(201).json(
			users.map(({ _id, username, email, password }) => {
				return {
					id: _id,
					username,
					email,
					password
				}
			})
		)
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

async function getUser(req: Request, res: Response): Promise<User> {
	try {
		const { id } = req.params

		const user = await UserService.getUser(id)

		if (!user) {
			res.status(422).json({ error: 'id não encontrado.' })
			return
		}

		const { _id, username, email, password } = user

		res.status(201).json({
			id: _id,
			username,
			email,
			password
		})
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

async function updateUser(req: Request, res: Response): Promise<User> {
	try {
		const { username, email, password } = req.body

		const { id } = req.params

		if (!username) {
			res.status(422).json({ error: 'campo nome de usuário é obrigatório.' })
			return
		}

		if (!email) {
			res.status(422).json({ error: 'campo de e-mail é obrigatório.' })
			return
		}

		if (!password) {
			res.status(422).json({ error: 'campo de senha é obrigatório.' })
			return
		}

		const user: User = { username, email, password }

		const updatedUser = await UserService.updateUser(id, user)

		if (updatedUser.matchedCount === 0) {
			res.status(422).json({ error: 'usuário não encontrado.' })
			return
		}

		res.status(201).json({
			id,
			...user
		})
	} catch (error) {
		res.status(500).json({ error: error.message })
	}
}

export default {
	createUser,
	getUsers,
	getUser,
	updateUser
}
