import {
	Box,
	HStack,
	Img as Image,
	List,
	ListItem,
	SlideFade,
	Stack,
	Text,
	useColorMode,
	useColorModeValue
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import axios from 'axios';
import React from 'react';
import { UserStatus } from '../typings/interfaces';
import { Tags } from '../components/Tags';
import { hometags } from '../lib/constants';
import { Heading1, Heading2 } from '../components/Headings';
import { Footer } from '../components/Footer';
import { CustomLink } from '../components/CustomLink';
import { PageContainer } from '../components/PageContainer';
import Head from 'next/head';

const Home: NextPage = () => {
	const [status, setStatus] = React.useState<UserStatus>({ status: 'offline' });
	const { colorMode } = useColorMode();

	React.useEffect(() => {
		axios
			.get(
				'https://nocache.advaith.workers.dev?url=https://japi.rest/discord/v1/user/883105651407077386'
			)
			.then(({ data }) => {
				setStatus({
					status: data.presence.status,
					vscode: data.presence.activities
						.find((a: any) => a.applicationId == '383226320970055681')
						?.state?.split(' ')
						.slice(1)
						.join(' '),
					playing: data.presence.activities.find(
						(a: any) => a.name != 'Spotify' && a.applicationId != '383226320970055681'
					)?.name,
					spotify: data.presence.activities.find((a: any) => a.name == 'Spotify')?.details
				});
			});
	}, []);

	return (
		<div>
			<PageContainer>
				<Head>
					<title>Hi, I&apos;m drgato!</title>
				</Head>

				{/** Intro */}
				<Stack align={'center'} direction={{ base: 'column', md: 'row' }} spacing={10}>
					<Stack direction={'column'} gap={5} maxW={'625px'}>
						<Heading1>I&apos;m drgato 😺</Heading1>
						<Text
							as={'p'}
							maxW={'860px'}
							fontSize={'xl'}
							color={useColorModeValue('gray.500', 'gray.300')}
							fontWeight={600}
						>
							<Text as={'span'} color={useColorModeValue('black', 'whitesmoke')}>
								Bot developer.
							</Text>{' '}
							A self-taught developer who likes to program Discord bots and design websites for
							people.
							<br />
							Also, I love cats ❤️.
						</Text>
						<HStack
							spacing={0}
							mt={2}
							gap={2}
							align={['center', 'start']}
							flexWrap={'wrap'}
							display={'inline-flex'}
						>
							<Tags status={status} />
						</HStack>
					</Stack>
					<Box display={{ base: 'block', md: 'none', lg: 'block' }} pos={'relative'}>
						<Image
							src={'/avatar.jpg'}
							alt={'drgato'}
							minW={'250px'}
							maxW={'250px'}
							minH={'auto'}
							rounded={'full'}
						/>
						<Text
							fontFamily={'sans-serif'}
							rounded={'full'}
							bg={colorMode == 'dark' ? 'gray.800' : 'gray.50'}
							p={2}
							w={'3.5rem'}
							h={'3.5rem'}
							pos={'absolute'}
							bottom={4}
							right={4}
							fontSize={'3xl'}
							textAlign={'center'}
							display={'flex'}
							alignItems={'center'}
							justifyContent={'center'}
						>
							🍵
						</Text>
					</Box>
				</Stack>

				{/** Idk */}
				<Heading2>A bit about me</Heading2>
				<Text>
					Check{' '}
					<CustomLink href={'/about'} color={'purple.500'}>
						/about
					</CustomLink>{' '}
					to know more about me!
				</Text>
				<List display={'flex'} flexDir={'column'} gap={3} pl={0}>
					{hometags.map((tag, i) => (
						<SlideFade in delay={i * 0.1 + 0.5} key={i}>
							<ListItem>{tag}</ListItem>
						</SlideFade>
					))}
				</List>

				{/** The footer */}
				<Footer />
			</PageContainer>
		</div>
	);
};

export default Home;
