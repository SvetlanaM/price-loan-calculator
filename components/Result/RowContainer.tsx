import { ReactNode } from 'react';

export interface Props {
	children: ReactNode;
}

const RowContainer = ({ children }: Props): JSX.Element => {
	return <div className=''>{children}</div>;
};

export default RowContainer;
