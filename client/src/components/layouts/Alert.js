import React from 'react'
import { connect } from 'react-redux'

const Alert = ({ alert }) =>
	alert !== null &&
	alert.length > 0 &&
	alert.map((alert, index) => (
		<div
			className={`my-3 alert alert-${alert.alertType}`}
			role='alert'
			key={index}
		>
			{alert.msg}
		</div>
	))

const mapStateToProps = (state) => ({
	alert: state.alert,
})

export default connect(mapStateToProps)(Alert)
