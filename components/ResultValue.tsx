import type { ReactNode } from 'react';
import { STATIC_TEXT_EN } from '../utils/Constants';

export interface Props {
	value: number | string;
	extraClassNames?: string;
	additionalVat?: ReactNode;
}

const ResultValue = ({
	value,
	extraClassNames,
	additionalVat,
}: Props): JSX.Element => {
	const finalValue =
		typeof value === 'number' ? `${value} ${STATIC_TEXT_EN.mxn}` : value;

	return (
		<div
			className={`font-bold flex flex-col justify-end items-end ${
				extraClassNames && extraClassNames
			}`}>
			{finalValue}
			{additionalVat && additionalVat}
		</div>
	);
};

export default ResultValue;
