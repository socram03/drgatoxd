import {
	Alert,
	AlertIcon,
	Avatar,
	Button,
	Flex,
	Grid,
	Heading,
	Image,
	SimpleGrid,
	Spinner,
	Stack,
	Text,
	Tooltip,
	useColorMode
} from '@chakra-ui/react';
import { FaDiscord, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { Container } from '@drgato/components/Home';
import Link from 'next/link';
import { Page } from '@drgato/components/Page';
import links from '@drgato/config/links.json';
import skills from '@drgato/config/skills.json';

export default function Home() {
	const { colorMode, toggleColorMode } = useColorMode();

	const isDrgatoBirthday = () => {
		const today = new Date();
		const birthday = new Date(2007, 8, 18);
		return today.getDate() == birthday.getDate() && today.getMonth() == birthday.getMonth();
	};

	return (
		<Page>
			<Heading
				as={'h1'}
				fontFamily={'"Bebas Neue"'}
				fontWeight={'normal'}
				fontSize={'6xl'}
				lineHeight={'1'}
			>
				Welcome to drgato&apos;s website!
			</Heading>

			{isDrgatoBirthday() && (
				<Alert status={'success'}>
					<AlertIcon />
					Hey! It&apos;s my birthday today, wohoo! 🎉
				</Alert>
			)}

			<Grid
				gap={8}
				templateColumns={{
					base: '1fr',
					md: 'repeat(3, 1fr)',
					lg: 'repeat(4, 1fr)'
				}}
			>
				{/* Profile */}
				<Container
					direction={'column'}
					gridColumn={{ base: 'unset', md: 'span 2 / span 2' }}
					as={Link}
					href={links.whoami}
					isNotExternal
				>
					<Avatar
						size={'xl'}
						src={
							'https://cdn.discordapp.com/guilds/995415463683182702/users/742460533818654791/avatars/2cabfda9eef3593923dcc447837fb931.png'
						}
						name={'drgato'}
					/>
					<Stack>
						<Heading fontWeight={'semibold'} fontSize={'2xl'}>
							I&apos;m drgato 👋
						</Heading>
						<Text>Know more about me! 💻</Text>
					</Stack>
				</Container>

				{/* GitHub Link */}
				<Container align={'center'} as={Link} isNotExternal href={'/repos'}>
					<Text fontSize={'6xl'}>
						<FaGithub />
					</Text>
					<Stack align={{ base: 'left', md: 'center' }}>
						<Heading>Repos</Heading>
						<Text opacity={0.7}>@drgatoxd</Text>
					</Stack>
				</Container>

				{/* RRSS */}
				<Stack
					align={'center'}
					gridColumn={'auto'}
					direction={{ base: 'row', md: 'column' }}
					justify={{ base: 'left', md: 'center' }}
				>
					<SimpleGrid
						w={'full'}
						h={'full'}
						justifyItems={'center'}
						columns={2}
						fontSize={'5xl'}
						gap={7}
					>
						<Container
							w={'full'}
							h={'full'}
							justify={'center'}
							align={'center'}
							as={Link}
							href={links.rrss.discord}
						>
							<FaDiscord />
						</Container>

						<Container
							w={'full'}
							h={'full'}
							justify={'center'}
							align={'center'}
							as={Link}
							href={links.rrss.twitter}
						>
							<FaTwitter />
						</Container>

						<Container
							w={'full'}
							h={'full'}
							justify={'center'}
							align={'center'}
							as={Link}
							href={links.rrss.instagram}
						>
							<FaInstagram />
						</Container>

						<Container
							w={'full'}
							h={'full'}
							justify={'center'}
							align={'center'}
							as={Link}
							href={links.rrss.youtube}
						>
							<FaYoutube />
						</Container>
					</SimpleGrid>
				</Stack>

				{/* Color mode */}
				<Container
					textAlign={{ base: 'left', md: 'center' }}
					align={'center'}
					as={Button}
					h={'full'}
					onClick={toggleColorMode}
				>
					<Text
						fontSize={'6xl'}
						transition={'.6s cubic-bezier(0.22, 1, 0.36, 1)'}
						transform={`rotate(${colorMode == 'dark' ? '0deg' : '-45deg'})`}
					>
						{colorMode == 'dark' ? <MdDarkMode /> : <MdLightMode />}
					</Text>
					<Stack align={{ base: 'left', md: 'center' }}>
						<Heading>Theme</Heading>
						<Text opacity={0.7}>{colorMode == 'dark' ? 'Dark' : 'Light'}</Text>
					</Stack>
				</Container>

				{/* Console */}
				<Stack
					rounded={'xl'}
					bg={colorMode == 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50'}
					p={0}
					overflow={'hidden'}
					direction={'column'}
					justify={'unset'}
					spacing={0}
				>
					<Flex
						w={'full'}
						h={8}
						bg={colorMode == 'dark' ? 'thunder.500' : 'thunder.100'}
						align={'center'}
						px={3}
						gap={2}
					>
						<Flex
							h={3}
							w={3}
							rounded={'full'}
							borderWidth={1}
							borderColor={'thunder.900'}
							bg={'red.400'}
						/>
						<Flex
							h={3}
							w={3}
							rounded={'full'}
							borderWidth={1}
							borderColor={'thunder.900'}
							bg={'yellow.400'}
						/>
						<Flex
							h={3}
							w={3}
							rounded={'full'}
							borderWidth={1}
							borderColor={'thunder.900'}
							bg={'green.400'}
						/>
					</Flex>
					<Flex fontFamily={'mono'} p={3}>
						<Text>
							<Text as={'span'} color={colorMode == 'dark' ? 'green.200' : 'green.600'}>
								$ cat drgato.txt
								<Text as={'span'} animation={'blinking 1s infinite'}>
									_
								</Text>
							</Text>
							<br />
							<br />
							<Text as={'span'}>
								&gt; Learning Next.js and React.
								<br />
								&gt; Ocasional streamer.
								<br />
								&gt; Working at Mind Shop.
								<br />
								&gt; I love cats.
								<br />
								<br />
								<Text as={'span'} opacity={0.5}>
									&gt; This terminal doesn&apos;t work.
								</Text>
							</Text>
						</Text>
					</Flex>
				</Stack>

				{/* Skills */}
				<Stack
					rounded={'xl'}
					p={5}
					bg={colorMode == 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50'}
					overflow={'hidden'}
					direction={'column'}
					justify={'space-around'}
					gridColumn={{ base: 'unset', md: 'span 2 / span 2' }}
				>
					<Heading>Skills</Heading>
					<Flex wrap={'wrap'} gap={5}>
						{skills.map(sk => (
							<Tooltip key={sk.key} label={sk.name} rounded={'full'}>
								<Image
									w={'48px'}
									h={'48px'}
									src={`https://skillicons.dev/icons?i=${sk.key}&theme=${colorMode}`}
									alt={sk.name}
									fallback={<Spinner size={'xl'} />}
								/>
							</Tooltip>
						))}
					</Flex>
				</Stack>
			</Grid>
		</Page>
	);
}
