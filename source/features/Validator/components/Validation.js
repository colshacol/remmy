import Ink, { h, Text } from "ink";
import symbols from "log-symbols";
import Spinner from "ink-spinner";

import { Spaces } from '@components/Spaces';

type Props = {
  status: number,
  rule: ValidatorRuleType
};

const colorProp = (status: number) => {
  const color = do {
    if (status === 0) {
      'red';
    } else if (status === 1) {
      'white';
    } else if (status === 2) {
      'green';
    }
  };

  return {
    [color]: true
  };
};

export const Validation = (props: Props) => {
  const color = colorProp(props.status);

  return (
    <div>
      <Choose>
        <When condition={props.status === 2}>{symbols.success}</When>
        <When condition={props.status === 1}>
          <Spinner green type="toggle" />
        </When>
        <Otherwise>{symbols.error}</Otherwise>
      </Choose>
      <Spaces count={2} />
      <Text {...color}>{props.rule.title}</Text>
    </div>
  );
};
