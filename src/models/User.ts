import mongoose from 'mongoose'

const Schema = mongoose.Schema

const User = new Schema({
	username: String,
	email: String,
	password: String
})

const UserModel = mongoose.model('User', User)

export default UserModel
