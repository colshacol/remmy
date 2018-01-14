import Ink, { h } from "ink";

export const Spaces = (props) => {
	return (
		<For each='space' of={Array(props.count).fill(' ')}>
			<span>{space}</span>
		</For>
	)
}