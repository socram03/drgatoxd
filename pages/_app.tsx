import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '../theme';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Navbar } from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
	const particlesInit = async (main: any) => {
		await loadFull(main);
	};

	return (
		<ChakraProvider theme={customTheme}>
			<Particles
				canvasClassName="zIndex"
				height="100vh"
				init={main => particlesInit(main)}
				options={{
					fpsLimit: 120,
					particles: {
						color: {
							value: '#ffffff'
						},
						collisions: {
							enable: true
						},
						move: {
							direction: 'none',
							enable: true,
							random: false,
							speed: 0.5,
							straight: false
						},
						number: {
							density: {
								enable: true,
								area: 1000
							},
							value: 25
						},
						opacity: {
							value: 0.5
						},
						shape: {
							type: 'circle'
						},
						size: {
							value: { min: 1, max: 2 }
						}
					},
					detectRetina: true
				}}
			/>
			<Navbar />
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
