import { Heading, keyframes, useColorMode } from '@chakra-ui/react';
import type React from 'react';

const border = keyframes`
from { transform: scaleX(0); }
to { transform: scaleX(1); }
`;
const animation = `${border} .7s .2s cubic-bezier(0.215, 0.61, 0.355, 1)`;

export const Heading1 = ({ children }: { children: React.ReactNode }) => {
	const { colorMode } = useColorMode();

	return (
		<Heading
			as={'h1'}
			fontWeight={800}
			pt={5}
			w={'max-content'}
			_after={{
				transformOrigin: '0% 50%',
				display: 'block',
				content: '""',
				transform: 'scaleX(0)',
				bg: `linear-gradient(90deg, ${
					colorMode == 'dark' ? '#ff5f6d, #ffc371' : '#eb3349, #f45c43'
				})`,
				h: '5px',
				animation,
				animationFillMode: 'forwards'
			}}
		>
			{children}
		</Heading>
	);
};

export const Heading2 = ({ children }: { children: React.ReactNode }) => (
	<Heading
		as={'h2'}
		pt={5}
		fontSize={'2xl'}
		w={'max-content'}
		_after={{
			transformOrigin: '0% 50%',
			display: 'block',
			content: '""',
			transform: 'scaleX(0)',
			borderBottom: '5px solid var(--chakra-colors-purple-500)',
			animation,
			animationFillMode: 'forwards'
		}}
	>
		{children}
	</Heading>
);
