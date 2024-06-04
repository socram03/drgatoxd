import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	SlideFade,
	Text,
	useBoolean,
	useColorMode
} from '@chakra-ui/react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import Link from 'next/link';

export function Navbar() {
	const [display, { off, on }] = useBoolean(false);
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex
			pos={'sticky'}
			top={0}
			minH={'70px'}
			w={'full'}
			bg={colorMode == 'dark' ? 'thunder.900' : 'thunder.50'}
			justify={'center'}
			align={'center'}
			zIndex={9}
		>
			<Container
				maxW={'container.xl'}
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
			>
				<Heading
					transition={'.2s ease'}
					fontSize={'2xl'}
					as={Link}
					href={'/'}
					h={'min-content'}
					onMouseEnter={on}
					onMouseLeave={off}
				>
					socram
					<SlideFade in={display} offsetX={'-5px'} offsetY={0} style={{ display: 'inline-block' }}>
						<Box>
							<Text
								as={'span'}
								className={'drgatome'}
								transition={'.2s ease'}
								color={colorMode == 'dark' ? 'cashmere.400' : 'cashmere.500'}
							>
								09
							</Text>
						</Box>
					</SlideFade>
				</Heading>
				<Button
					onClick={toggleColorMode}
					variant={'ghost'}
					colorScheme={colorMode == 'light' ? 'purple' : 'orange'}
				>
					{colorMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
				</Button>
			</Container>
		</Flex>
	);
}
