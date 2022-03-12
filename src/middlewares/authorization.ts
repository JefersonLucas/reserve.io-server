import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import 'dotenv/config'

const secret = process.env.SECRET_JWT

function authorization(req: Request, res: Response, next: NextFunction) {
	const authHeader = req.headers['authorization']
	const token = authHeader && authHeader.split(' ')[1]

	try {
		if (!token) {
			return res.status(401).json({ error: 'acesso negado.' })
		}

		verify(token, secret)

		next()
	} catch (error) {
		res.status(400).json({ error: 'token inválido.' })
	}
}

export default authorization
