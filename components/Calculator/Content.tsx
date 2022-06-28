import type { ReactNode } from 'react';
import ColumnContainer from '../ColumnContainer';

export interface Props {
	children: ReactNode;
	extraClassNames?: string[];
}

const Content = ({ children }: Props): JSX.Element => (
	<div className='px-8 py-10'>{children}</div>
);

export default Content;
