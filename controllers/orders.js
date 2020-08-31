const asyncHandler = require('./../middleware/async')
const ErrorResponse = require('./../utils/errorResponse')

const Order = require('./../models/Order')

// @desc    Get all orders
// @route   GET /api/orders
// @access  Public
exports.getOrders = asyncHandler(async (req, res, next) => {
	const orders = await Order.find()

	res.status(200).json({ count: orders.length, orders })
})

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Public
exports.getOrder = asyncHandler(async (req, res, next) => {
	const order = await Order.findById(req.params.id)

	if (!order) {
		return next(
			new ErrorResponse(`Order with id ${req.params.id} not found...`, 404)
		)
	}

	res.status(200).json(order)
})

// @desc    Create order
// @route   POST /api/orders
// @access  Public
exports.createOrder = asyncHandler(async (req, res, next) => {
	const order = await Order.create(req.body)

	res.status(201).json(order)
})

// @desc    Update order
// @route   PUT /api/orders/:id
// @access  Public
exports.updateOrder = asyncHandler(async (req, res, next) => {
	let order = await Order.findById(req.params.id)

	if (!order) {
		return next(
			new ErrorResponse(`Order with id ${req.params.id} not found...`, 404)
		)
	}

	order = await Order.findByIdAndUpdate(
		req.params.id,
		{ $set: req.body },
		{
			new: true,
			runValidators: true,
		}
	)

	res.status(203).json(order)
})

// @desc    Delete order
// @route   DELETE /api/orders/:id
// @access  Public
exports.deleteOrder = asyncHandler(async (req, res, next) => {
	let order = await Order.findById(req.params.id)

	if (!order) {
		return next(
			new ErrorResponse(`Order with id ${req.params.id} not found...`, 404)
		)
	}

	order = await Order.findByIdAndDelete(req.params.id)

	res.status(200).json({})
})
