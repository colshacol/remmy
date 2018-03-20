import Ink, { h, Text } from "ink";
import Console, {LogCatcher} from 'ink-console';
import symbols from "log-symbols";

import { Validation } from './components/Validation';
import { rules as configProperties } from "./ruleSets/configProperties";
import { rules as rootDirValue } from "./ruleSets/rootDirValue";
import * as methods from './methods'

type Props = {
	onComplete(): void
};

const rules = [ ...configProperties, ...rootDirValue ];

export class Validator extends Ink.Component<Props> {
	state = {
		validations: [],
		failures: []
	};

	componentDidMount() {
		rules.forEach((rule, index) => {
			setTimeout(() => {
				const i = String(index);
				this.setValidation(rule.test(this.context.config), i);
			}, 200 * index)
		})
	}

	render(props, state, context) {
		this.confirmCompletion();

		return context.options.v && (
			<div>
				<For each="rule" of={rules} index="index">
					<Validation
						status={this.statusOf(index)}
						rule={rule}
					/>
				</For>
			</div>
		);
	}

	confirmCompletion = () => {
		this.rulesCompleted && this.allRulesPassed && this.props.onComplete();
	}

	get allRulesPassed() {
		return this.state.validations.length === rules.length;
	}

	get rulesCompleted() {
		return this.state.validations.length + this.state.failures.length === rules.length;
	}

	statusOf = index => {
		return this.state.validations.includes(index)
			? 'validations'
			: this.state.failures.includes(index)
				? 'failures'
				: 'pending'
	}

	setValidation(result: boolean, index: string) {
		const which = result ? 'validations' : 'failures'
		this.setState(state => ({
			[which]: [ Number(index), ...state[which]]
		}));
	};
}