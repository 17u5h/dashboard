const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

const {
	PORT,
	API_URL,
	MONGO_URL
} = process.env

mongoose.connect(MONGO_URL, e => {
	if (e) throw e
	console.log('connected to MongoDB')
})

const app = express()

app.listen(PORT, () => {
	console.log(`Started at ${API_URL}:${PORT}`)
})

app.get('/', (req, res) => {
	res.status(200)
	res.send('data')
})