import type { ReactNode } from 'react';

export interface Props {
	children: ReactNode;
}

const Content = ({ children }: Props): JSX.Element => (
	<div className='px-8 py-10'>{children}</div>
);

export default Content;
