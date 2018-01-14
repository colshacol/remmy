import Ink, { h } from 'ink';

export class Provider extends Ink.Component {
	render(props, state, context) {
		return props.children;
	}

	getChildContext() {
		const { children, ...props } = this.props;

		return {
			...props
		}
	}
}