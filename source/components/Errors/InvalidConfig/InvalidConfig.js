import { h, Text } from "ink"
import { TextLine } from '@components/TextLine'

type Props = {
	reason: string,
	reference: string
}

export const InvalidConfig = (props: Props) => {
  return (
    <div>
			<div>
	      <Text bgRed white>Error: Config is not valid.</Text>
			</div>
      <br />
      <TextLine red>Reason: {props.reason}</TextLine>
      <TextLine red>Reference: {props.reference}</TextLine>
    </div>
  );
};
