import React, { useState } from 'react'
import './addOrder.scss'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAlert } from './../../../actions/alert'
import { addOrder } from './../../../actions/order'

const AddOrder = ({ setAlert, addOrder }) => {
	const [form, setForm] = useState({
		name: '',
		phone: '',
		firm: '',
		commentary: '',
	})
	const { name, phone, firm, commentary } = form

	const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

	const onSubmit = (e) => {
		e.preventDefault()
		addOrder(form)
		setForm({
			name: '',
			phone: '',
			firm: '',
			commentary: '',
		})
	}

	return (
		<div className='add-order'>
			<Link to='/orders' className='btn btn-secondary'>
				Back to orders
			</Link>
			<div className='add-order'>
				<div className='add-order__info'>Update order</div>
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
					<div className='mt-4 d-flex justify-content-around'>
						<button type='submit' className='btn btn-success'>
							Create order
						</button>
						<Link to='/orders' className='btn btn-secondary'>
							Back to orders
						</Link>
					</div>
				</form>
			</div>
		</div>
	)
}

export default connect(null, { setAlert, addOrder })(AddOrder)
