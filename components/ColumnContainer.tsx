import { Children, ReactNode } from 'react';

export interface Props {
	children: ReactNode;
}

const ColumnContainer = ({ children }: Props): JSX.Element => {
	const childrenCount = Children.count(children);

	if (childrenCount !== 2) {
		throw new RangeError(
			'Column container supports only two columns grid for this project!'
		);
	}

	return (
		<div className='flex justify-between items-center pb-6 '>{children}</div>
	);
};

export default ColumnContainer;
