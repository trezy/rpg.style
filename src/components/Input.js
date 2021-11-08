// Module imports
import PropTypes from 'prop-types'





export function Input(props) {
	const {
		id,
		label,
		onChange,
		type,
		value,
	} = props

	return (
		<div className="input">
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				onChange={onChange}
				type={type}
				value={value} />
		</div>
	)
}

Input.defaultProps = {
	onChange: () => {},
	type: 'text',
	value: undefined,
}

Input.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	type: PropTypes.oneOf([
		'date',
		'datetime-local',
		'email',
		'month',
		'number',
		'password',
		'search',
		'tel',
		'text',
		'time',
		'url',
		'week',
	]),
	value: PropTypes.string,
}
