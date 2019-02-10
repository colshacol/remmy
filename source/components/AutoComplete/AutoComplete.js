import { h, Color } from 'ink'
import PropTypes from 'prop-types'
import { BlankLine } from 'ink-spaces'
import Select from '@components/SelectInput'
import TextInput from '@components/TextInput'
import fuzzy from 'fuzzy'

// Helpers -------------------------------------------------------------------

const noop = () => {}
const isEmpty = arr => arr.length === 0
const getMatch = input => ({ label }) =>
	input.length > 0 && label.toLowerCase().indexOf(input.toLowerCase()) > -1

// AutoComplete --------------------------------------------------------------

const match = (items, value) => {
	const values = items.map(item => item.label)
	const results = fuzzy.filter(value, values)
	const matches = results.map(item => item.string)

	return items.filter(item => {
		return matches.includes(item.label)
	})
}

export const AutoComplete = ({
	value,
	placeholder,
	items,
	getMatch,
	onChange,
	onSelectionChange,
	onSubmit,
	indicatorComponent,
	itemComponent
}) => {
	const matches = match(items, value)

	return (
		<span>
			<div>
				<TextInput
					value={value}
					placeholder={placeholder}
					onChange={onChange}
				/>
			</div>

			{!isEmpty(matches) && (
				<Select
					items={matches}
					onSelect={onSubmit}
					focus={!isEmpty(matches)}
					limit={10}
					indicatorComponent={indicatorComponent}
					itemComponent={itemComponent}
					onChange={onSelectionChange}
				/>
			)}
		</span>
	)
}

AutoComplete.propTypes = {
	value: PropTypes.string,
	placeholder: PropTypes.string,
	items: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.string.isRequired,
			value: PropTypes.any.isRequired
		})
	),
	getMatch: PropTypes.func,
	onChange: PropTypes.func,
	onSubmit: PropTypes.func,
	indicatorComponent: PropTypes.func,
	itemComponent: PropTypes.func
}

AutoComplete.defaultProps = {
	value: '',
	placeholder: '',
	items: [],
	getMatch,
	onChange: noop,
	onSubmit: noop,
	indicatorComponent: Select.defaultProps.indicatorComponent,
	itemComponent: Select.defaultProps.itemComponent
}
