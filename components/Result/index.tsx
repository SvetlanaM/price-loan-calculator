import type { ReactNode } from 'react';
import RowContainer from './RowContainer';
import Row from './Row';

interface Props {
	children: ReactNode;
}

const Result = ({ children }: Props): JSX.Element => (
	<div className='px-8 pt-4 pb-0 font-light '>{children}</div>
);

Result.RowContainer = RowContainer;
Result.Row = Row;

export default Result;
