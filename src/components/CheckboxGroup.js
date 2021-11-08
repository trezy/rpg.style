// Module imports
import PropTypes from 'prop-types'





// Local imports
import { Checkbox } from 'components/Checkbox'





function mapItems(item, index) {
	return (
		<Checkbox
			{...item}
			key={index} />
	)
}

export function CheckboxGroup(props) {
	const { items } = props

	return (
		<div className="checkbox-group">
			{items.map(mapItems)}
		</div>
	)
}

CheckboxGroup.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		label: PropTypes.string.isRequired,
	})).isRequired,
}
