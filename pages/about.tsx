import {
	Box,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
	Text,
	useColorModeValue
} from '@chakra-ui/react';
import axios from 'axios';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Footer } from '../components/Footer';
import { Heading1, Heading2 } from '../components/Headings';
import { LanguageIcon } from '../components/LanguageIcon';
import { PageContainer } from '../components/PageContainer';
import { skills } from '../lib/constants';

const About: NextPage = () => {
	const [cat, setCat] = useState('');

	const loadCat = () => {
		axios
			.get('https://api.thecatapi.com/v1/images/search')
			.then(({ data }) => {
				setCat(data[0].url);
			})
			.catch(() => undefined);
	};

	useEffect(() => {
		if (cat.length) return;
		loadCat();
	}, [cat]);

	return (
		<PageContainer>
			<Head>
				<title>About me - drgato.me</title>
			</Head>

			{/** About me */}
			<Heading1>About drgato</Heading1>
			<Text as={'p'} fontSize={'lg'} maxW={'860px'}>
				I started learning to code in 2020 creating Discord bots with Node.
				<br />
				I&apos;m currently learning new frameworks and languages like TypeScript, React, and
				Next.js.
				<br />
				When I&apos;m not coding, I&apos;m probably playing video games, helping others in Discord
				or watching <a href={'https://www.youtube.com/c/AlFondoHaySitio'}>AFHS</a>.
			</Text>

			{/** Skills */}
			<Heading2>🚀 Skills</Heading2>
			<Text fontSize={'lg'} color={useColorModeValue('gray.700', 'gray.200')} fontWeight={600}>
				I have a passion for learning new things and I am always looking for new ways to improve my
				skills.
			</Text>
			<HStack spacing={0} gap={2} flexWrap={'wrap'}>
				{skills.map(skill => (
					<LanguageIcon key={skill.icon} id={skill.icon} name={skill.name} />
				))}
			</HStack>

			{/** TIL */}
			<Heading2>☕ Things I like</Heading2>
			<List fontFamily={'Satoshi'} pl={2} color={useColorModeValue('gray.700', 'gray.200')}>
				<ListItem>🧑‍💻 Programming</ListItem>
				<ListItem>🎧 Listen to music</ListItem>
				<ListItem>🐈 Pet my cat</ListItem>
				<ListItem>📺 Watch series</ListItem>
				<ListItem>🤝 Help others in Discord</ListItem>
				<ListItem>🍪 Eat cookies (Integrackers &lt;3)</ListItem>
				<ListItem>😴 Sleep and ignore people for many days xd</ListItem>
			</List>

			{/** Random cat */}
			<Heading2>🐈 Random cat</Heading2>
			<Text>
				I don&apos;t know what else to put ;-;
				<br />
				<Text
					cursor={'pointer'}
					color={'orange.500'}
					as={'span'}
					pb={3}
					_hover={{ textDecor: 'underline' }}
					onClick={loadCat}
				>
					Want a new cat?
				</Text>
			</Text>
			<Box>
				<Image
					fallback={
						<HStack mb={2} spacing={3}>
							<Spinner /> <Text as={'span'}>finding cats...</Text>
						</HStack>
					}
					alt={'random cat from thecatapi.com'}
					src={cat}
					maxH={'500px'}
					w={'auto'}
				/>
				<Text fontSize={'sm'}>random cat from thecatapi.com</Text>
			</Box>

			{/** The footer */}
			<Footer />
		</PageContainer>
	);
};

export default About;
