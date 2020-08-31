import axios from 'axios'
import {
	GET_ORDERS,
	ORDERS_FAIL,
	GET_ORDER,
	ORDER_FAIL,
	CLEAR_ORDER,
	UPDATE_ORDER,
	ADD_ORDER,
	DELETE_ORDER,
	FILTER_ORDERS,
	CLEAR_FILTER,
	SET_LOADING,
} from './types'
import { setAlert } from './alert'

export const setLoading = () => async (dispatch) => {
	dispatch({ type: SET_LOADING })
}

export const getOrders = () => async (dispatch) => {
	setTimeout(() => {
		setLoading()
	}, 50)

	try {
		const res = await axios.get('http://localhost:5000/api/orders', {
			headers: { 'Access-Control-Allow-Origin': true },
		})

		dispatch({ type: GET_ORDERS, payload: res.data })
	} catch (error) {
		dispatch({ type: ORDERS_FAIL })
	}
}

export const getOrder = (id) => async (dispatch) => {
	try {
		const res = await axios.get(`http://localhost:5000/api/orders/${id}`)

		dispatch({ type: GET_ORDER, payload: res.data })
	} catch (err) {
		dispatch({ type: ORDER_FAIL })
	}
}

export const clearOrder = () => async (dispatch) => {
	dispatch({ type: CLEAR_ORDER })
}

export const updateOrder = (id, form) => async (dispatch) => {
	try {
		const res = await axios.put(
			`http://localhost:5000/api/orders/${id}`,
			JSON.stringify(form),
			{
				headers: { 'Content-Type': 'application/json' },
			}
		)

		dispatch({ type: UPDATE_ORDER, payload: res.data })

		dispatch(setAlert('Order was updated :)', 'success'))
	} catch (err) {
		dispatch({ type: ORDER_FAIL })
	}
}

export const addOrder = (form) => async (dispatch) => {
	try {
		const res = await axios.post(
			'http://localhost:5000/api/orders/',
			JSON.stringify(form),
			{ headers: { 'Content-Type': 'application/json' } }
		)

		dispatch({ type: ADD_ORDER, payload: res.data })

		dispatch(setAlert('Order was created :)', 'success'))
	} catch (err) {
		dispatch({ type: ORDER_FAIL })
	}
}

export const deleteOrder = (id) => async (dispatch) => {
	try {
		await axios.delete(`http://localhost:5000/api/orders/${id}`)

		dispatch({ type: DELETE_ORDER, payload: id })

		dispatch(
			setAlert(
				'Order was deleted and will inspire after reload to prevent unexpected losing data',
				'warning'
			)
		)
	} catch (err) {
		dispatch({ type: ORDER_FAIL })
	}
}

export const filterOrders = (textFilter) => async (dispatch) => {
	dispatch({ type: FILTER_ORDERS, payload: textFilter })
}

export const clearFilter = () => async (dispatch) => {
	dispatch({ type: CLEAR_FILTER })
}
