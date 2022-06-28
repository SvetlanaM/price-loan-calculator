interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className='min-h-screen font-primary flex justify-center bg-white items-center text-black'>
			<div className='card'>{children}</div>
		</div>
	);
};

export default Layout;
