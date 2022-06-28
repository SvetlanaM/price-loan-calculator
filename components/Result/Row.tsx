import type { ReactNode } from 'react';
import ColumnContainer from '../ColumnContainer';
import Divider from '../Divider';
import ResultValue from '../ResultValue';

export interface Props {
	label: string;
	value: number | string;
	extraClassNames?: string[];
	additionalVat?: ReactNode;
}

const Row = ({
	label,
	value,
	extraClassNames,
	additionalVat,
}: Props): JSX.Element => (
	<div className='py-3'>
		<ColumnContainer>
			<h3 className={`${extraClassNames && extraClassNames[0]}`}>{label}</h3>
			<ResultValue
				value={value}
				extraClassNames={extraClassNames && extraClassNames[1]}
				additionalVat={additionalVat}
			/>
		</ColumnContainer>
		<Divider />
	</div>
);

export default Row;
