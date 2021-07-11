const mongoose = require('mongoose');

export const userSchema = new mongoose.Schema({
	id: {
		type: Number
	},
	name: {
		type: String
	},
	age: {
		type: Number
	},
	email: {
		type: String
	},
	phone: {
		type: Number
	}
})