import { Schema, model } from 'mongoose'
import { User } from '@types'

const userSchema = new Schema<User>({
  username: String,
  email: String,
  password: String
})

const UserModel = model<User>('User', userSchema)

export default UserModel
