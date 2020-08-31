import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './updateOrder.scss'
import { connect } from 'react-redux'
import { clearOrder, updateOrder, getOrder } from './../../../actions/order'
import { setAlert } from './../../../actions/alert'

const UpdateOrder = ({
	order: { order },
	clearOrder,
	updateOrder,
	setAlert,
	match,
}) => {
	const [form, setForm] = useState({
		name: '',
		phone: '',
		firm: '',
		commentary: '',
		createdAt: '',
	})
	const { name, phone, firm, commentary, createdAt } = form

	useEffect(() => {
		setForm({
			name: order.name ? order.name : '',
			phone: order.phone ? order.phone : '',
			firm: order.firm ? order.firm : '',
			commentary: order.commentary ? order.commentary : '',
			createdAt: order.createdAt ? order.createdAt : '',
		})
	}, [order])

	console.log('form', form)

	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		e.preventDefault()
		updateOrder(match.params.id, form)
	}

	return (
		<div className='update-order'>
			<div className='update-order__info'>Update order</div>

			<form onSubmit={onSubmit}>
				<input
					type='text'
					className='form-control mt-3'
					placeholder='Name'
					name='name'
					value={name}
					onChange={onChange}
				/>
				<input
					type='number'
					className='form-control mt-3'
					placeholder='Phone'
					name='phone'
					value={phone}
					onChange={onChange}
				/>
				<input
					type='text'
					className='form-control mt-3'
					placeholder='Firm'
					name='firm'
					value={firm}
					onChange={onChange}
				/>
				<input
					type='text'
					className='form-control mt-3'
					placeholder='Commentary'
					name='commentary'
					value={commentary}
					onChange={onChange}
				/>
				<input
					type='text'
					className='form-control mt-3'
					placeholder='Created at'
					name='createdAt'
					value={createdAt}
					readOnly
				/>
				<div className='mt-4 d-flex justify-content-around'>
					<button type='submit' className='btn btn-success'>
						Submit changes
					</button>
					<Link
						to='/orders'
						className='btn btn-secondary'
						onClick={() => clearOrder()}
					>
						Back to orders
					</Link>
				</div>
			</form>
		</div>
	)
}

const mapStateToProps = (state) => ({
	order: state.order,
})

export default connect(mapStateToProps, {
	clearOrder,
	updateOrder,
	getOrder,
	setAlert,
})(UpdateOrder)
