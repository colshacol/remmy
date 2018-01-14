import { h, Text } from "ink";

export const TextLine = (props) => {
	return (
		<span>
			<Text {...props} />
			<br/>
		</span>
	)
}