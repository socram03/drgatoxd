import '../styles/fonts.css';
import '../styles/fixes.css';
import { ChakraProvider, extendTheme, SlideFade, type Theme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { mode } from '@chakra-ui/theme-tools';
import { MobileNav, Navbar } from '../components/Navbar';
import NextProgressbar from '../components/Progress';
import Head from 'next/head';

const theme = extendTheme({
	config: {
		disableTransitionOnChange: false,
		initialColorMode: 'dark',
		useSystemColorMode: true
	},
	colors: {
		gray: {
			50: '#e1e2ea',
			100: '#c9cbd9',
			200: '#b4b7ca',
			300: '#9497b3',
			400: '#7a7e9f',
			500: '#5c618a',
			600: '#4b4d63',
			700: '#343646',
			800: '#252632',
			900: '#17181F'
		}
	},
	components: {
		Heading: {
			baseStyle: {
				fontWeight: 'semibold'
			}
		},
		Text: {
			baseStyle: (props: Record<string, any>) => ({
				color: mode('gray.700', 'gray.200')(props)
			})
		}
	},
	fonts: {
		heading: 'Poppins, "Noto Color Emoji"',
		body: 'Satoshi, "Noto Color Emoji", sans-serif',
		mono: 'Cascadia Code'
	},
	shadows: { outline: '0 0 0 2px var(--chakra-colors-orange-700)' },
	styles: {
		global: (props: Record<string, any>) => ({
			'::selection': {
				bg: mode('#0002', '#fff2')(props)
			},
			'::-webkit-scrollbar': {
				width: '5px',
				height: '5px',
				bg: mode('gray.200', 'gray.800')(props)
			},
			'::-webkit-scrollbar-thumb': {
				bg: mode('gray.300', 'gray.700')(props)
			},
			html: {
				scrollBehavior: 'smooth'
			},
			body: {
				bg: mode('#fff', 'gray.900')(props),
				transitionProperty: 'background-color',
				transitionDuration: 'normal',
				fontSize: '1.2rem',
				fontWeight: '500',
				minHeight: '100vh'
			}
		})
	}
} as DeepPartial<Theme>);

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
				/>
				<meta name="HandheldFriendly" content="true" />
			</Head>
			<NextProgressbar
				options={{ easing: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)', speed: 200 }}
				color="linear-gradient(90deg, #ff5f6d, #ffc371)"
			/>
			<Navbar />
			<SlideFade key={router.route} in>
				<Component {...pageProps} />
			</SlideFade>
			<MobileNav />
		</ChakraProvider>
	);
}

export default MyApp;
