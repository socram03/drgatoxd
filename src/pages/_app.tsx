import '@drgato/styles/globals.css';
import * as Chakra from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar } from '@drgato/components/Navbar';
import { Scale } from '@drgato/components/Transition';
import theme from '@drgato/theme';

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<Chakra.ChakraProvider theme={theme}>
			<Head>
				<title>Socram09 - A Discord API solution disegner</title>
				<meta
					name={'description'}
					content={'A lazy cat lover 🐈'}
				/>
				<meta name={'author'} content={'socram09'} />
				<meta name={'keywords'} content={'seyfert, seyfert.dev, discord, bot, developer'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
				<meta name={'theme-color'} content={'#d8945f'} />
			</Head>
			<Navbar />
			<Scale initialScale={router.pathname == '/' ? 1.04 : 0.96} in key={router.pathname}>
				<Component {...pageProps} />
			</Scale>
		</Chakra.ChakraProvider>
	);
}
