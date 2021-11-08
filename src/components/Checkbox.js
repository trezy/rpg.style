// Module imports
import PropTypes from 'prop-types'





// Local imports
import { transformStringToID } from 'helpers/transformStringToID'





export function Checkbox(props) {
	const { label } = props
	const id = props.id || transformStringToID(label)

	return (
		<div className="checkbox">
			<input
				id={id}
				type="checkbox" />
			<label htmlFor={id}>{label}</label>
		</div>
	)
}

Checkbox.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
}
