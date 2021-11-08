// Module imports
import {
	useCallback,
	useEffect,
	useMemo,
	useState,
} from 'react'
import classnames from 'classnames'
import isEqual from 'lodash.isequal'
import PropTypes from 'prop-types'





// Module imports
import { Button } from 'components/Button'
import { transformStringToID } from 'helpers/transformStringToID'





function deserializeOptionID(optionID) {
	return optionID.split(':')[3]
}

export function ChoicePanel(props) {
	const {
		id,
		isMultiselect,
		onChange,
		value,
	} = props
	const [state, setState] = useState(() => {
		if (typeof value !== 'undefined') {
			return value
		}

		if (isMultiselect) {
			return []
		}

		return undefined
	})

	// Normalize all options to objects
	const {
		options,
		optionsByID,
	} = useMemo(() => {
		return props.options.reduce((accumulator, option) => {
			let normalizedOption = { ...option }

			if (typeof option === 'string') {
				normalizedOption = { label: option }
			}

			if (!normalizedOption.id) {
				normalizedOption.id = transformStringToID(normalizedOption.label)
			}

			normalizedOption.original = option

			accumulator.optionsByID[normalizedOption.id] = normalizedOption
			accumulator.options.push(normalizedOption)

			return accumulator
		}, {
			options: [],
			optionsByID: {},
		})
	}, [props.options])

	// Serialize the option ID into an id string that is unique to this <ChoicePanel>
	const serializeOptionID = useCallback(optionID => {
		return `choice-panel:${id}:option:${optionID}`
	}, [id])

	const handleOptionClick = useCallback(event => {
		const optionID = deserializeOptionID(event.target.id)
		const option = optionsByID[optionID]

		setState(previousState => {
			if (isMultiselect) {
				const newState = [...previousState]
				const optionIndex = newState.indexOf(option)

				if (optionIndex === -1) {
					newState.push(option)
				} else {
					newState.splice(optionIndex, 1)
				}

				return Array.from(new Set(newState))
			}

			return option
		})
	}, [
		deserializeOptionID,
		isMultiselect,
		optionsByID,
		setState,
	])

	const mapOptions = useCallback(option => {
		let isSelected = false

		if (isMultiselect) {
			isSelected = state.includes(option)
		} else {
			isSelected = (state === option)
		}

		return (
			<Button
				className={classnames({ 'is-selected': isSelected })}
				id={serializeOptionID(option.id)}
				onClick={handleOptionClick}
				key={option.id}
				value={option.id}>
				{option.label}
			</Button>
		)
	}, [
		isMultiselect,
		serializeOptionID,
		state,
		handleOptionClick,
	])

	useEffect(() => {
		if (isMultiselect) {
			onChange(state?.map(option => option.original))
		} else {
			onChange(state?.original)
		}
	}, [
		isMultiselect,
		onChange,
		state,
	])

	useEffect(() => {
		if (typeof value !== 'undefined') {
			setState(previousState => {
				if (isEqual(value, previousState)) {
					return previousState
				}

				return value
			})
		}
	}, [
		setState,
		value,
	])

	return (
		<div className="choice-panel">
			{options.map(mapOptions)}
		</div>
	)
}

ChoicePanel.defaultProps = {
	id: null,
	isMultiselect: false,
	onChange: () => {},
	value: undefined,
}

ChoicePanel.propTypes = {
	id: PropTypes.string,
	isMultiselect: PropTypes.bool,
	onChange: PropTypes.func,
	options: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.shape({
			id: PropTypes.string,
			label: PropTypes.string,
			onClick: PropTypes.func,
		}),
	])).isRequired,
	value: PropTypes.any,
}
