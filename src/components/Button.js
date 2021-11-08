// Module imports
import PropTypes from 'prop-types'





export function Button(props) {
	const {
		children,
		className,
		id,
		onClick,
		type,
	} = props

	return (
		<button
			className={className}
			id={id}
			onClick={onClick}
			type={type}>
			{children}
		</button>
	)
}

Button.defaultProps = {
	className: undefined,
	id: undefined,
	onClick: undefined,
	type: 'button',
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	id: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.oneOf([
		'button',
		'submit',
		// Reset is intentionally excluded from this list because reset buttons are cruel
	]),
}
