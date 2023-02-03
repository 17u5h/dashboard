const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name: {
		type: String
	},
	email: {
		type: String
	},
	tel: {
		type: String
	},
	IP: {
		type: String
	},
	watchFrom: {
		type: String
	},
	watchTill: {
		type: String
	}
})

module.exports = mongoose.model('user', userSchema)