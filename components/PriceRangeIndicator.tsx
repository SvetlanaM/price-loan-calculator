import { MouseEventHandler } from 'react';

interface Props {
	value: number;
	onChangeValue: MouseEventHandler<HTMLSpanElement>;
}

const PriceRangeIndicator = ({ value, onChangeValue }: Props): JSX.Element => {
	return (
		<span className='cursor-pointer' onClick={onChangeValue}>
			{value}
		</span>
	);
};

export default PriceRangeIndicator;
