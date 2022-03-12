import app from './app'
import { connect } from 'mongoose'
import 'dotenv/config'

const PORT = process.env.PORT
const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const DATABASE = process.env.DB_DATABASE

connect(
	`mongodb+srv://${USER}:${PASSWORD}@apicluster.v91ac.mongodb.net/${DATABASE}?retryWrites=true&w=majority`
)
	.then(() => {
		console.log('Database connection created successfully!')
		console.log(`Open port on http://localhost:${PORT}/`)
		app.listen(PORT)
	})
	.catch((e) => {
		console.log(e.message)
	})
