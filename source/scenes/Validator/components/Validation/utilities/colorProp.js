export const colorProp = (status: string) => {
	const color = status === 'failures'
		? 'red'
		: status === 'validations'
			? 'green'
			: 'white';

  return {
    [color]: true
  };
};