import NextLink from 'next/link';
import { Link as ChakraLink, type LinkProps } from '@chakra-ui/react';

export function CustomLink({
	children,
	href,
	...props
}: {
	children: React.ReactNode;
	href: string;
} & LinkProps) {
	return (
		<NextLink href={href} passHref>
			<ChakraLink textDecoration={'none !important'} rel="noopener noreferrer" {...props}>
				{children}
			</ChakraLink>
		</NextLink>
	);
}
