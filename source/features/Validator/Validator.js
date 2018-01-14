import Ink, { h, Text } from "ink";
import symbols from "log-symbols";

import { Validation } from './components/Validation';
import { rules as configProperties } from "./ruleSets/configProperties";
import { rules as rootDirValue } from "./ruleSets/rootDirValue";

type Props = {
  onComplete(): void
};

const rules = [...configProperties, ...rootDirValue];

const validationLists = {
	[0]: 'failures',
	[1]: 'validations' 
}

let i = 0;

export class Validator extends Ink.Component<Props> {
  state = {
    validations: [],
    failures: []
	};

	fakeUpdate = () => {
		if (i++ > rules.length) return;

		setTimeout(() => {
			this.setState(state => ({
				failures: [...state.failures, i]
			}), () => {
				this.fakeUpdate();
			})
		}, 500)
	}

	componentDidMount() {
		setTimeout(this.fakeUpdate, 1000);
	}

  render(props, state, context) {
    return context.options.v && (
      <div>
        <For each="rule" of={rules} index="index">
          <Validation
						status={this.checkStatus(index)}
						rule={rule}
					/>
        </For>
      </div>
    );
  }

  checkStatus = index => {
		const { validations, failures } = this.state;

		if (index in validations) {
			return 2;
		} else if (index in failures) {
			return 0;
		} else {
			return 1;
		}
  };

  setValidation = (index: number, status: number) => {
		const which = validationLists[which];

    this.setState(state => ({
      [which]: [...state[which], index]
    }));
  };
}
