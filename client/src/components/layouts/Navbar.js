import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { filterOrders, clearFilter } from './../../actions/order'

const Navbar = ({ filterOrders, clearFilter }) => {
	const [text, setText] = useState('')

	useEffect(() => {
		if (text === '') {
			clearFilter()
		}
		//eslint-disable-next-line
	}, [])

	const onChange = (e) => {
		setText(e.target.value)
		if (e.target.value !== '') {
			filterOrders(text)
		} else {
			clearFilter()
		}
	}

	return (
		<nav className='navbar navbar-expand-sm navbar-light bg-light'>
			<Link className='navbar-brand mt-2' to='/'>
				<h5>OrdersApp</h5>
			</Link>

			<div className=' navbar-collapse'>
				<ul className='navbar-nav mr-auto'>
					<li className='nav-item active'>
						<Link to='/orders' className='nav-link ml-2 mt-2'>
							<h5>Orders</h5>
						</Link>
					</li>
				</ul>
				<form className='form-inline my-2 my-lg-0'>
					<input
						className='form-control mr-sm-2'
						type='search'
						placeholder='Filter orders'
						aria-label='Search'
						name='text'
						value={text}
						onChange={onChange}
					/>
				</form>
			</div>
		</nav>
	)
}

export default connect(null, { filterOrders, clearFilter })(Navbar)
