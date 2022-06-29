import Head from 'next/head';

const Meta = (): JSX.Element => {
	return (
		<Head>
			<meta property=' og:type' content='website' />
			<meta property='og:url' content='' />
			<meta property='og:title' content='' key='ogtitle' />
			<meta property='og:description' content='' key='ogdesc' />
			<meta property='og:image' content='' key='ogimage' />
			<meta property='og:image-alt' content='.' />
			<meta property='og:site_name' content='' key='ogsitename' />
			<meta property='og:type' content='article' />

			<meta name='title' content='' />
			<meta name='description' content='.' />
			<meta name='author' content='Svetlana Margetová' />
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<meta name='format-detection' content='telephone=no' />
			<title>Bootiq pricing calculator</title>
		</Head>
	);
};

export default Meta;
