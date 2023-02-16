import { Heading, Image, SimpleGrid, Stack, Text, useColorMode, useToast } from '@chakra-ui/react';
import { MdCake, MdLocationOn, MdOutlineAccessTimeFilled } from 'react-icons/md';
import { Page } from '@drgato/components/Page';
import { useState } from 'react';

export default function WhoAmI() {
	const { colorMode } = useColorMode();
	const toast = useToast();
	const [img, setImg] = useState('/img/avatar.png');

	const unavailable = () => {
		if (img == '/img/avatar.png') setImg('/img/uchi.jpg');
		if (!toast.isActive('unavailable')) {
			toast({
				// eslint-disable-next-line quotes
				title: "I won't show my real face yet.",
				description: 'Still, if you prefer, you can see my cat',
				status: 'error',
				id: 'unavailable',
				isClosable: true,
				duration: 5000
			});
		}
	};

	return (
		<Page maxW={'container.lg'}>
			<Heading
				as={'h1'}
				fontFamily={'"Bebas Neue"'}
				fontWeight={'normal'}
				fontSize={'5xl'}
				lineHeight={'1'}
				textAlign={{ base: 'center', lg: 'left' }}
			>
				Who is drgato?
			</Heading>

			<Stack
				direction={{ base: 'column-reverse', lg: 'row' }}
				justify={'space-between'}
				spacing={8}
				align={'center'}
			>
				<Stack maxW={'600px'} align={'center'}>
					<Text fontSize={'xl'}>
						Hi, I&apos;m drgato, a developer from Peru. I started learning to code in 2020 creating
						Discord bots with Node.
						<br />
						<br />
						<Text
							as={'span'}
							fontWeight={'medium'}
							color={colorMode == 'dark' ? 'cashmere.400' : 'cashmere.500'}
							onClick={unavailable}
							cursor={'pointer'}
						>
							Will I show my real face?
						</Text>
					</Text>

					<br />

					<Text>
						My real name is <b>Mathias</b>, I&apos;m 15 years old and I live in Lima, Peru. I&apos;m
						a self-taught developer. I also like to freestyle rap when I&apos;m bored and alone. I
						don&apos;t like to play video games (cuz I&apos;m bad at them) but I like to watch them.
						<br />
						<br />I knew about programming since I was 8 years old, when I wanted to make a website
						for my YT channel. Then, 7 years later, I started learning to code, starting with
						discord bots.
						<br />
						<br />
						Currently, I&apos;m learning React and Next.js, working at Mind Shop and developing
						Master Nico bot and Galactus bot.
					</Text>

					<br />
					<br />

					<Heading as={'h2'} fontSize={'3xl'} lineHeight={'1'} textAlign={'left'} w={'full'}>
						General Info
					</Heading>
					<br />
					<SimpleGrid spacing={5} w={'full'} columns={{ base: 1, sm: 2, md: 3 }}>
						<Text as={'span'} display={'flex'} alignItems={'center'} gap={2}>
							<MdCake /> September 18th
						</Text>
						<Text as={'span'} display={'flex'} alignItems={'center'} gap={2}>
							<MdLocationOn /> Lima, Peru
						</Text>
						<Text as={'span'} display={'flex'} alignItems={'center'} gap={2}>
							<MdOutlineAccessTimeFilled />
							{new Date().toLocaleTimeString([], {
								timeZone: 'America/Lima',
								hour: '2-digit',
								minute: '2-digit'
							})}{' '}
							(UTC -05:00)
						</Text>
					</SimpleGrid>
					<br />
					<br />

					<Heading as={'h2'} fontSize={'3xl'} lineHeight={'1'} textAlign={'left'} w={'full'}>
						Things I like
					</Heading>
					<br />
					<Text w={'full'}>
						🧑‍💻 Programming
						<br />
						🎧 Listen to music
						<br />
						🐈 Pet my cat
						<br />
						📺 Watch series
						<br />
						🤝 Help others in Discord
						<br />
						🍪 Eat cookies
						<br />
						😴 Sleep and ignore people for many days xd
					</Text>
				</Stack>

				<Image
					pos={{ base: 'initial', lg: 'sticky' }}
					top={'100px'}
					rounded={'full'}
					objectFit={'cover'}
					w={'200px'}
					h={'200px'}
					src={img}
					alt={'drgato pfp'}
					alignSelf={{ base: 'center', lg: 'baseline' }}
				/>
			</Stack>
		</Page>
	);
}
