import { Flex, Heading, Stack, Text, useColorMode } from '@chakra-ui/react';
import { Icon } from './Icon';

interface ContactProps {
	name: string;
	href: string;
	icon: string;
	color: string;
}
export const ContactCard = ({ href, name, icon, color }: ContactProps) => {
	const { colorMode } = useColorMode();
	return (
		<Stack
			as={'a'}
			href={href}
			target={'_blank'}
			rel={'noopener noreferrer'}
			role={'button'}
			_hover={{
				bg: colorMode == 'dark' ? 'gray.700' : 'gray.100'
			}}
			minW={'240px'}
			minH={'100px'}
			p={5}
			bg={colorMode == 'dark' ? 'gray.800' : 'gray.50'}
			transition={'.2s cubic-bezier(0.08, 0.52, 0.52, 1)'}
			rounded={'xl'}
			direction={'row'}
			align={'center'}
			spacing={5}
		>
			<Flex
				align={'center'}
				justify={'center'}
				rounded={'xl'}
				w={'52px'}
				h={'52px'}
				bg={color}
				color={'white'}
			>
				<Icon id={icon} v={'b'} s={'3xl'} />
			</Flex>
			<Stack direction={'column'} spacing={0} maxW={'65%'}>
				<Heading as={'span'} fontSize={'lg'}>
					{name}
				</Heading>
				<Text fontSize={'md'} overflow={'hidden'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>
					{href}
				</Text>
			</Stack>
		</Stack>
	);
};
