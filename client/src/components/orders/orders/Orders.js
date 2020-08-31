import React, { useEffect } from 'react'
import './orders.scss'
import { connect } from 'react-redux'
import { getOrders, filterOrders, deleteOrder } from './../../../actions/order'
import { Link } from 'react-router-dom'

import Loader from './../../layouts/loader/Loader'
import Order from './../orderItem/Order'

const Orders = ({
	getOrders,
	deleteOrder,
	order: { loading, orders, filteredOrders, ordersCount },
}) => {
	useEffect(() => {
		getOrders()
		//eslint-disable-next-line
	}, [])

	return (
		<div className='orders'>
			{loading === true ? (
				<Loader />
			) : (
				<div>
					<div className='orders__header'>
						<h3>
							Total orders number:{' '}
							<span className='badge badge-secondary'>
								<strong>{ordersCount}</strong>
							</span>
						</h3>
						<Link to='/add-order' className='btn btn-secondary'>
							Add order
						</Link>
					</div>
					<div className='orders__output'>
						{filteredOrders.length === 0
							? orders.map((order) => <Order key={order._id} order={order} />)
							: filteredOrders.map((order) => (
									<Order key={order._id} order={order} />
							  ))}
					</div>
				</div>
			)}
		</div>
	)
}

const mapStateToProps = (state) => ({
	order: state.order,
})

export default connect(mapStateToProps, { getOrders, deleteOrder })(Orders)
