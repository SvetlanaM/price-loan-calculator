import { ReactNode } from 'react';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className='min-h-screen font-primary flex justify-center bg-white items-center text-black py-20'>
			<div className='card shadow-xl'>{children}</div>
		</div>
	);
};

export default Layout;
