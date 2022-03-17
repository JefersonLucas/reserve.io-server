/* eslint-disable camelcase */
import { Request, Response } from 'express'
import { compare, genSalt, hash } from 'bcrypt'
import { sign, verify } from 'jsonwebtoken'
import 'dotenv/config'

import { User } from '@types'

import UserService from '@services/user.services'
import UserModel from '@models/User'

const secret = process.env.SECRET_JWT

async function createUser (req: Request, res: Response): Promise<User> {
  try {
    const { username, email, password, confirm_password } = req.body

    if (!username) {
      res.status(422).json({ error: 'o campo nome de usuário é obrigatório.' })
      return
    }

    if (!email) {
      res.status(422).json({ error: 'o campo de e-mail é obrigatório.' })
      return
    }

    if (!password) {
      res.status(422).json({ error: 'o campo de senha é obrigatório.' })
      return
    }

    if (!confirm_password) {
      res
        .status(422)
        .json({ error: 'o campo confirmação de senha é obrigatório.' })
      return
    }

    if (password !== confirm_password) {
      res.status(422).json({ error: 'as senhas não conferem.' })
      return
    }

    const userExists = await UserService.getUserEmail(email)

    if (userExists) {
      res.status(422).json({ error: 'esse e-mail já foi utilizado.' })
      return
    }

    const salt = await genSalt(12)

    const password_hash = await hash(password, salt)

    const user = new UserModel({
      username,
      email,
      password: password_hash
    })

    await UserService.createUser(user)

    res.status(201).json({
      id: user._id,
      username: user.username,
      email: user.email
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function login (req: Request, res: Response): Promise<User> {
  try {
    const { email, password } = req.body

    if (!email) {
      res.status(422).json({ error: 'o campo de e-mail é obrigatório.' })
      return
    }

    if (!password) {
      res.status(422).json({ error: 'o campo de senha é obrigatório.' })
      return
    }

    const user = await UserService.getUserEmail(email)

    if (!user) {
      res.status(404).json({ error: 'usuário não encontrado.' })
      return
    }

    const check_password = await compare(password, user.password)

    if (!check_password) {
      res.status(422).json({ error: 'senha inválida.' })
      return
    }

    const token = sign(
      {
        id: user._id
      },
      secret
    )

    res.status(200).json({
      id: user._id,
      token: token
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function validateToken (req: Request, res: Response) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(' ')[1]

  try {
    if (!token) {
      return res.status(401).json({ error: 'acesso negado.' })
    }

    verify(token, secret)

    res.status(200).json({ message: 'token válido.' })
  } catch (error) {
    res.status(400).json({ error: 'token inválido.' })
  }
}

async function getUsers (_: Request, res: Response): Promise<User[] | void> {
  try {
    const users = await UserService.getUsers()

    res.status(200).json(
      users.map(({ _id, username, email }) => {
        return {
          id: _id,
          username,
          email
        }
      })
    )
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function getUser (req: Request, res: Response): Promise<User> {
  try {
    const { id } = req.params

    const user = await UserService.getUser(id)

    if (!user) {
      res.status(422).json({ error: 'usuário não encontrado.' })
      return
    }

    const { _id, username, email } = user

    res.status(200).json({
      id: _id,
      username,
      email
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function updateUser (req: Request, res: Response): Promise<User> {
  try {
    const { username, email, password } = req.body

    const { id } = req.params

    if (!username) {
      res.status(422).json({ error: 'o campo nome de usuário é obrigatório.' })
      return
    }

    if (!email) {
      res.status(422).json({ error: 'o campo de e-mail é obrigatório.' })
      return
    }

    if (!password) {
      res.status(422).json({ error: 'o campo de senha é obrigatório.' })
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
      username: user.username,
      email: user.email
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

async function deleteUser (req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params

    const user = await UserService.getUser(id)

    if (!user) {
      res.status(422).json({ error: 'usuário não encontrado.' })
      return
    }

    await UserService.deleteUser(id)

    res.status(200).json({ message: 'usuário removido.' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export default {
  createUser,
  login,
  validateToken,
  getUsers,
  getUser,
  updateUser,
  deleteUser
}
