import type { Theme } from './typings';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const theme: DeepPartial<Theme> = {
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: true,
		cssVarPrefix: 'drgato',
		disableTransitionOnChange: false
	},
	colors: {
		cashmere: {
			'50': '#fcf7f0',
			'100': '#f7ecdd',
			'200': '#efd5b9',
			'300': '#e8c39e',
			'400': '#d8945f',
			'500': '#d0783f',
			'600': '#c16335',
			'700': '#a14e2d',
			'800': '#813f2b',
			'900': '#693525'
		},
		mongoose: {
			'50': '#fcf7f0',
			'100': '#f7ecdd',
			'200': '#efd5b9',
			'300': '#e8c39e',
			'400': '#d8945f',
			'500': '#d0783f',
			'600': '#c16335',
			'700': '#a14e2d',
			'800': '#813f2b',
			'900': '#693525'
		},
		twine: {
			'50': '#f8f6ee',
			'100': '#eee8d3',
			'200': '#dfd1a9',
			'300': '#cdb377',
			'400': '#be9952',
			'500': '#af8543',
			'600': '#966b38',
			'700': '#785130',
			'800': '#66432d',
			'900': '#583a2b'
		},
		thunder: {
			'50': '#f7f6f7',
			'100': '#e4e2e5',
			'200': '#c9c5ca',
			'300': '#a8a0a8',
			'400': '#857b86',
			'500': '#6b616b',
			'600': '#554c55',
			'700': '#453f46',
			'800': '#3a353a',
			'900': '#2a272a'
		}
	},
	fonts: {
		heading: 'Satoshi',
		body: 'Satoshi'
	},
	semanticTokens: {
		colors: {
			'chakra-body-bg': {
				_light: 'thunder.50',
				_dark: 'thunder.900'
			}
		}
	},
	styles: {
		global: (props: Record<string, string>) => ({
			color: mode('cashmere.900', 'cashmere.500')(props)
		})
	}
};

export default extendTheme(theme);

export type DeepPartial<T> = {
	[P in keyof T]?: DeepPartial<T[P]>;
};
