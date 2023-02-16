import { Stack, type StackProps, useColorMode } from '@chakra-ui/react';

export function Container({
	children,
	isNotExternal,
	...props
}: {
	isNotExternal?: boolean;
	children: React.ReactNode;
	href?: string;
} & StackProps) {
	const { colorMode } = useColorMode();

	return (
		<Stack
			bg={colorMode == 'dark' ? 'whiteAlpha.50' : 'blackAlpha.50'}
			p={5}
			rounded={'xl'}
			spacing={7}
			gridColumn={'auto'}
			direction={{ base: 'row', md: 'column' }}
			justify={{ base: 'left', md: 'center' }}
			target={isNotExternal ? undefined : '_blank'}
			rel={'noopener noreferrer'}
			transition={'all 0.1s ease-out'}
			_hover={{
				bg: colorMode == 'dark' ? 'thunder.600' : 'thunder.100'
			}}
			{...props}
		>
			{children}
		</Stack>
	);
}
