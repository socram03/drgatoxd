import { Flex, type FlexProps } from '@chakra-ui/react';
import { Scale } from './Transition';
import { useRouter } from 'next/router';

export function Page({ children, ...props }: { children: React.ReactNode } & FlexProps) {
	const router = useRouter();
	return (
		<Scale
			style={{ overflowX: 'hidden' }}
			initialScale={router.pathname == '/' ? 1.04 : 0.96}
			in
			key={router.pathname}
		>
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
		</Scale>
	);
}
