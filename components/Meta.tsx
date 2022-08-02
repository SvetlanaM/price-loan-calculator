import Head from 'next/head';

const Meta = (): JSX.Element => {
	return (
		<Head>
			<meta name='title' content='Jigglypuff calculator' />
			<meta
				name='description'
				content='Jigglypuff calculator - learning project'
			/>
			<meta name='author' content='Svetlana Margetová' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<title>Jigglypuff calculator</title>
			<link
				rel='apple-touch-icon'
				sizes='180x180'
				href='/apple-touch-icon.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='32x32'
				href='/favicon-32x32.png'
			/>
			<link
				rel='icon'
				type='image/png'
				sizes='16x16'
				href='/favicon-16x16.png'
			/>
			<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#de9bd3' />
			<meta name='msapplication-TileColor' content='#00aba9' />
			<meta name='theme-color' content='#ffffff'></meta>
		</Head>
	);
};

export default Meta;
