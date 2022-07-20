import type { ReactNode, Ref } from 'react';
import RowContainer from './RowContainer';
import Row from './Row';

interface Props {
	children: ReactNode;
}

const Result = ({ children }: Props): JSX.Element => (
	<div className='px-8 py-4 font-light '>{children}</div>
);

Result.RowContainer = RowContainer;
Result.Row = Row;

export default Result;
