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
} from './../actions/types'

const initialState = {
	orders: [],
	filteredOrders: [],
	ordersCount: '',
	order: {},
	loading: true,
}

export default (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case GET_ORDERS:
			return {
				...state,
				orders: payload.orders.reverse(),
				ordersCount: payload.count,
				loading: false,
			}
		case GET_ORDER:
			return {
				...state,
				order: payload,
				loading: false,
			}
		case ADD_ORDER:
			return {
				...state,
				orders: [payload, ...state.orders],
				loading: false,
			}
		case UPDATE_ORDER:
			return {
				...state,
				loading: false,
			}
		case DELETE_ORDER:
			return {
				...state,
				orders: state.orders.filter((order) => order.id !== payload),
			}
		case FILTER_ORDERS:
			return {
				...state,
				filteredOrders: state.orders.filter((order) => {
					const regexp = new RegExp(`${action.payload}`, 'gi')
					return (
						order.name.match(regexp) ||
						order.phone.toString().match(regexp) ||
						order.firm.match(regexp) ||
						order.commentary.match(regexp)
					)
				}),
				loading: false,
			}
		case CLEAR_FILTER:
			return {
				...state,
				filteredOrders: [],
				loading: false,
			}
		case ORDERS_FAIL:
			return {
				...state,
				orders: [],
				ordersCount: '',
				loading: false,
			}
		case ORDER_FAIL:
		case CLEAR_ORDER:
			return {
				...state,
				order: {},
				loading: false,
			}
		case SET_LOADING:
			return {
				...state,
				loading: true,
			}
		default:
			return state
	}
}
