import { Flex, type FlexProps } from '@chakra-ui/react';

export const Page = ({ children, ...props }: { children: React.ReactNode } & FlexProps) => (
	<Flex
		margin={'auto'}
		w={'full'}
		maxW={'container.xl'}
		px={{ base: 6, xl: 2 }}
		py={[5, 5, 9]}
		flexDir={'column'}
		gap={8}
		{...props}
	>
		{children}
	</Flex>
);
