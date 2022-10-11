import {
	Box,
	Button,
	ButtonProps,
	Container,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Grid,
	HStack,
	Text,
	Tooltip,
	useColorMode,
	useColorModeValue,
	useDisclosure
} from '@chakra-ui/react';
import { NextRouter, useRouter } from 'next/router';
import { links, navlinks } from '../lib/constants';
import { Icon } from './Icon';
import Link from 'next/link';

/** Mobile Navbar */

export function MobileNav() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();

	return (
		<>
			<Grid
				bg={useColorModeValue('whitesmoke', 'gray.900')}
				borderTop={'3px solid var(--chakra-colors-purple-500)'}
				bottom={0}
				minH={'76px'}
				w={'100%'}
				position={'fixed'}
				display={{ base: 'grid', md: 'none' }}
				templateColumns={'1fr 1fr'}
				gap={5}
				px={5}
				py={2}
				zIndex={999}
			>
				<Flex
					role={'button'}
					transition={'.2s ease'}
					_hover={{ bg: useColorModeValue('gray.200', 'gray.800') }}
					rounded={'lg'}
				>
					<Link href={router.pathname == '/' ? '/about' : '/'}>
						<Flex justify={'center'} align={'center'} w={'full'} flexDir={'column'}>
							<Icon
								c={useColorModeValue('orange.500', 'orange.300')}
								s={'md'}
								id={router.pathname == '/' ? 'newspaper' : 'house'}
								v={'s'}
							/>
							<Text
								fontWeight={600}
								color={useColorModeValue('gray.800', 'gray.200')}
								fontSize={'sm'}
							>
								{router.pathname == '/' ? 'About' : 'Home'}
							</Text>
						</Flex>
					</Link>
				</Flex>
				<Flex
					role={'button'}
					transition={'.2s ease'}
					_hover={{ bg: useColorModeValue('gray.200', 'gray.800') }}
					rounded={'lg'}
					h={'100%'}
					w={'100%'}
					pb={1}
					pt={2}
					display={'flex'}
					justifyContent={'center'}
					alignItems={'center'}
					flexDir={'column'}
					onClick={onOpen}
				>
					<Icon c={useColorModeValue('orange.500', 'orange.300')} s={'md'} id={'bars'} v={'s'} />
					<Text fontWeight={600} color={useColorModeValue('gray.800', 'gray.200')} fontSize={'sm'}>
						Menu
					</Text>
				</Flex>
			</Grid>

			<MenuDrawer isOpen={isOpen} onClose={onClose} />
		</>
	);
}

function MenuDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	const { colorMode, toggleColorMode } = useColorMode();
	const router = useRouter();

	return (
		<Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
			<DrawerOverlay />
			<DrawerContent bg={useColorModeValue('whitesmoke', 'gray.800')} p={2}>
				<DrawerCloseButton />
				<DrawerHeader display={'flex'} alignItems={'center'}>
					Menu
				</DrawerHeader>
				<DrawerBody>
					<NavLinkBtn router={router} href={'/'} title={'Home'} mb={2} onClose={onClose} />
					<Grid gap={2} templateColumns={'1fr 1fr'}>
						{navlinks.map(link => (
							<NavLinkBtn
								router={router}
								href={link.href}
								title={link.name}
								key={link.name}
								onClose={onClose}
							/>
						))}
					</Grid>
				</DrawerBody>
				<DrawerFooter mt={5} borderTopWidth="1px" p={2} justifyContent={'space-between'}>
					<HStack>
						{links.slice(0, 3).map(link => (
							<Button as={'a'} href={link.href} rel={'noopener noreferrer'} key={link.name}>
								<Icon id={link.icon} v={'b'} />
							</Button>
						))}
					</HStack>
					<Button onClick={toggleColorMode}>
						<Icon id={colorMode == 'dark' ? 'sun' : 'moon'} v={'s'} />
					</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

function NavLinkBtn({
	router,
	href,
	title,
	onClose,
	...props
}: { router: NextRouter; href: string; title: string; onClose: () => void } & ButtonProps) {
	return (
		<Link href={href}>
			<Button
				onClick={onClose}
				w={'100%'}
				bg={useColorModeValue(
					router.pathname == href ? 'orange.400' : 'gray.100',
					router.pathname == href ? 'orange.400' : 'gray.700'
				)}
				_hover={{
					bg: useColorModeValue(
						router.pathname == href ? 'orange.500' : 'gray.200',
						router.pathname == href ? 'orange.500' : 'gray.600'
					)
				}}
				{...props}
			>
				{title}
			</Button>
		</Link>
	);
}

/** Desktop Navbar */

export function Navbar() {
	const router = useRouter();
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box
			display={{ base: 'none', md: 'block' }}
			position={'sticky'}
			top={0}
			minW={'100%'}
			minH={'76px'}
			// bg={useColorModeValue('white', 'gray.900')}
			borderBottom={'3px solid var(--chakra-colors-purple-500)'}
			zIndex={9}
			px={5}
			py={2}
			backdropFilter={'blur(10px)'}
		>
			<Container maxW={'container.lg'} display={'flex'} justifyContent={'space-between'}>
				<Link href={'/'}>
					<Text cursor={'pointer'} fontSize={'4xl'}>
						{router.pathname == '/' ? '😺' : '🏠'}
					</Text>
				</Link>
				<HStack>
					{navlinks.map(link => (
						<NavLink router={router} link={link} colorMode={colorMode} key={link.href} />
					))}
				</HStack>
				<Flex align={'center'}>
					<Button variant={'ghost'} rounded={'full'} onClick={toggleColorMode}>
						<Icon id={colorMode == 'dark' ? 'sun' : 'moon'} v={'s'} />
					</Button>
				</Flex>
			</Container>
		</Box>
	);
}

function NavLink({
	link,
	router,
	colorMode
}: {
	link: any;
	router: NextRouter;
	colorMode: string;
}) {
	return (
		<Link key={link.name} href={link.href}>
			<Button
				bg={
					router.pathname == link.href
						? colorMode == 'light'
							? 'orange.100'
							: 'yellow.700'
						: colorMode == 'light'
						? 'white'
						: 'gray.900'
				}
				_hover={{
					bg:
						router.pathname == link.href
							? colorMode == 'light'
								? 'orange.100'
								: 'yellow.700'
							: colorMode == 'light'
							? 'gray.100'
							: 'gray.800'
				}}
				disabled={router.pathname == link.href}
			>
				{link.name}
			</Button>
		</Link>
	);
}
