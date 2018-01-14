import Ink, { h, Text } from "ink";

import { Provider } from "@features/Provider";
import { Validator } from '@features/Validator';
import * as Errors from "@features/Errors";

export class App extends Ink.Component {
  state = {
    validated: false
  };

  componentDidMount() {
    setTimeout(() => process.exit(0), 5000);
  }

  render(props, state, context) {
    return (
      <div>
        <Choose>
          <When condition={!state.validated}>
            <Validator onComplete={this.passValidation} />
          </When>
          <Otherwise>
            <Text green>Config is valid: Prompt which template to use.</Text>
          </Otherwise>
        </Choose>
      </div>
    );
  }

  passValidation = () => {
    this.setState(state => ({
      validated: true
    }))
  }
}



/*
            <Errors.InvalidConfig
              reason={context.config.validity.reason}
              reference={context.config.validity.reference}
            />
*/