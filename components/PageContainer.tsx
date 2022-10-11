import { Flex } from '@chakra-ui/react';

export const PageContainer = (props: { children: React.ReactNode }) => {
	return (
		<Flex
			margin={'auto'}
			maxW={'container.lg'}
			px={[5, 7, 20]}
			pt={[5, 5, 9]}
			flexDir={'column'}
			gap={5}
			pb={'calc(var(--chakra-space-20) + 1rem)'}
		>
			{props.children}
		</Flex>
	);
};
