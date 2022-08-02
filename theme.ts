import { type Theme, extendTheme } from '@chakra-ui/react';

const theme: Partial<Theme> = {
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: false
	},
	fonts: {
		heading: 'Inter',
		body: 'Nunito Sans',
		mono: '"Cascadia Code", monospace'
	},
	styles: {
		global: {
			body: {
				minH: '100vh',
				bg: '#040d21'
			}
		}
	}
};

export const customTheme = extendTheme(theme);
