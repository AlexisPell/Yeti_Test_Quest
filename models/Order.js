const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: Number,
		required: true,
	},
	firm: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	commentary: {
		type: String,
		minlength: 6,
		maxlength: 500,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	ati: {
		type: String,
	},
})

module.exports = mongoose.model('Order', OrderSchema)
