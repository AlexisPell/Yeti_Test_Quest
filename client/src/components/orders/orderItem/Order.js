import React, { useEffect } from 'react'
import './order.scss'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import { getOrder, deleteOrder } from './../../../actions/order'

const Order = ({
	order: { _id, name, phone, firm, commentary, createdAt },
	getOrder,
	deleteOrder,
}) => (
	<div className='card mt-2'>
		<div className='card-body'>
			<h6 className='card-title mb-1 order__info'>Order id:</h6>
			<span className='card-subtitle mb-2 text-muted'>{_id}</span>
			<h6 className='card-title mt-4 mb-3 order__info'>Order information:</h6>
			<p className='card-text'>
				<strong>name:</strong> {name}
			</p>
			<p className='card-text'>
				<strong>phone:</strong> {phone}
			</p>
			<p className='card-text'>
				<strong>firm:</strong> {firm}
			</p>
			<p className='card-text'>
				<strong>commentary:</strong> {commentary}
			</p>
			<p className='card-text'>
				<strong>Date of creation:</strong>{' '}
				<Moment format='YYYY/MM/DD'>{createdAt}</Moment>
			</p>
			<Link
				to={`/update-order/${_id}`}
				className='card-link btn btn-secondary btn-sm'
				onClick={() => getOrder(_id)}
			>
				Update order
			</Link>
			<button
				onClick={() => deleteOrder(_id)}
				className='card-link btn-danger ml-5 p-1 order__delete'
			>
				Delete order
			</button>
		</div>
	</div>
)

export default connect(null, { getOrder, deleteOrder })(Order)
