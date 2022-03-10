import app from './app'
import mongoose from 'mongoose'
import 'dotenv/config'

mongoose
	.connect(
		`mongodb+srv://${process.env.DB_MONGODB_USER}:${process.env.DB_MONGODB_PASSWORD}@apicluster.v91ac.mongodb.net/${process.env.DB_MONGODB_DATABASE}?retryWrites=true&w=majority`
	)
	.then(() => {
		console.log('Database connection created successfully!')
		console.log(`Open port on http://localhost:${process.env.PORT}/`)
		app.listen(process.env.PORT)
	})
	.catch((e) => {
		console.log(e.message)
	})
