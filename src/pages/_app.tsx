import '@drgato/styles/globals.css';
import * as Chakra from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Navbar } from '@drgato/components/Navbar';
import { SlideFade } from '@chakra-ui/react';
import theme from '@drgato/theme';

export default function App({ Component, pageProps, router }: AppProps) {
	return (
		<Chakra.ChakraProvider theme={theme}>
			<Head>
				<title>drgato.me - A Discord Bot Developer</title>
				<meta
					name={'description'}
					content={'drgato is a front-end and discord bot developer. also he loves cats 🐈'}
				/>
				<meta name={'author'} content={'drgato'} />
				<meta name={'keywords'} content={'drgato, drgato.me, discord, bot, developer'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1.0'} />
				<meta name={'theme-color'} content={'#d8945f'} />
			</Head>
			<Navbar />
			<SlideFade in key={router.pathname}>
				<Component {...pageProps} />
			</SlideFade>
		</Chakra.ChakraProvider>
	);
}
