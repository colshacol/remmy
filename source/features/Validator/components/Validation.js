import Ink, { h, Text } from "ink";
import symbols from "log-symbols";
import Spinner from "ink-spinner";

import { Spaces, Tab } from 'ink-spaces';
import { colorProp } from './utilities/colorProp'

type Props = {
  status: string,
  rule: ValidatorRuleType
};

let i = 0;
export const Validation = (props: Props) => {
	const color = colorProp(props.status);
  return (
    <div>
			<Spaces count={4} />
      <Choose>
        <When condition={props.status === 'validations'}>{symbols.success}</When>
        <When condition={props.status === 'pending'}>
          <Spinner green type="toggle" />
        </When>
        <Otherwise>{symbols.error}</Otherwise>
      </Choose>
      <Spaces count={2} />
      <Text {...colorProp(props.status)}>{props.rule.title}</Text>
    </div>
  );
};
