import Ink, { h, Text } from "ink";

import { Provider } from '@features/Provider';
import * as Errors from "@features/Errors";

export class App extends Ink.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    setTimeout(() => process.exit(0), 100);
  }

  render(props, state, context) {
    return (
      <div>
        <Choose>
          <When condition={!context.config.validity}>
            <Text green>Config is valid: Prompt which template to use.</Text>
          </When>
          <Otherwise>
            <Errors.InvalidConfig
              reason={context.config.validity.reason}
              reference={context.config.validity.reference}
            />
          </Otherwise>
        </Choose>
      </div>
    );
  }
}