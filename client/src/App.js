import React from 'react'
import './App.css'
import { Switch, Route } from 'react-router-dom'

import Navbar from './components/layouts/Navbar'
import Alert from './components/layouts/Alert'
import Landing from './components/layouts/landing/Landing'
import Orders from './components/orders/orders/Orders'
import AddOrder from './components/orderForms/addOrder/AddOrder'
import UpdateOrder from './components/orderForms/updateOrder/UpdateOrder'

const App = () => {
	return (
		<div className='app'>
			<Navbar />
			<div className='container'>
				<Alert />
				<Switch>
					<Route path='/' exact component={Landing} />
					<Route path='/orders' exact component={Orders} />
					<Route path='/add-order' exact component={AddOrder} />
					<Route path='/update-order/:id' exact component={UpdateOrder} />
				</Switch>
			</div>
		</div>
	)
}

export default App
