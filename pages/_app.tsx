import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Meta from '../components/Meta';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.Fragment>
			<Meta />
			<Component {...pageProps} />
		</React.Fragment>
	);
}

export default MyApp;
