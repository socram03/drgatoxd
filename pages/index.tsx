import type { NextPage } from 'next';
import { Container, Heading, HStack, Link, Text, SlideFade, Tooltip, Box } from '@chakra-ui/react';
import { Icon } from '../components/Icon';
import Head from 'next/head';
import { socials } from '../socials';

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Home - drgato</title>
				<link rel="icon" href="/cat.png" />
			</Head>
			<Container
				px={5}
				minH="100vh"
				display="flex"
				flexDir="column"
				justifyContent="center"
				alignItems={['left', 'left', 'center']}
				gap={3}
			>
				<Box position="relative">
					<Heading
						animation=".5s .5s ease shadowAnimation forwards"
						as={'span'}
						fontSize="6xl"
						lineHeight="1"
						fontWeight="extrabold"
						color="transparent"
						style={{ WebkitTextStroke: '1px gray' }}
						position="absolute"
						zIndex={-1}
						className="animation-forwards"
					>
						Mathías Gómez
					</Heading>
					<Heading
						as={'h1'}
						fontSize="6xl"
						lineHeight="1"
						fontWeight="extrabold"
						animation="5s linear hueRotate infinite"
					>
						Mathías Gómez
					</Heading>
				</Box>
				<Text color="#afafaf" fontSize="xl">
					Self taught programmer, working on{' '}
					<Link
						textShadow="0 0 30px #0000"
						transition="all .2s ease"
						_hover={{ color: 'green.200', textShadow: '0 0 30px #0f0' }}
						target="_blank"
						rel="noreferrer"
						href="https://github.com/masternico-bot"
					>
						@MasterNico-Bot
					</Link>
				</Text>
				<HStack fontSize="xl" gap={5}>
					{socials.map(([id, href], i) => (
						<SlideFade key={`social-${i}`} in delay={i / 20}>
							<Tooltip color="white" bg="black" label={capitalize(id)}>
								<Link target="_blank" rel="noreferrer" className="link" href={href}>
									<span>
										<Icon className="header link" type="brands" id={id} />
									</span>
								</Link>
							</Tooltip>
						</SlideFade>
					))}
				</HStack>
			</Container>
		</div>
	);
};

export default Home;

export function capitalize(s: string) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}
