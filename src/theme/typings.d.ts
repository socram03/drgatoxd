import { type ColorHues, type ComponentStyleConfig, type ThemeConfig } from '@chakra-ui/react';
import { type Styles } from '@chakra-ui/theme-tools';

export interface Theme {
	colors: Record<string, ColorHues>;
	components: ComponentStyleConfig;
	config: ThemeConfig;
	fonts: {
		heading: string;
		body: string;
		mono: string;
	};
	semanticTokens: {
		colors: Record<string, { _light: string; _dark: string }>;
	};
	sizes: {
		container: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		max: string;
		min: string;
		full: string;
		'3xs': string;
		'2xs': string;
		xs: string;
		sm: string;
		md: string;
		lg: string;
		xl: string;
		'2xl': string;
		'3xl': string;
		'4xl': string;
		'5xl': string;
		'6xl': string;
		'7xl': string;
		'8xl': string;
		prose: string;
		px: string;
		0.5: string;
		1: string;
		1.5: string;
		2: string;
		2.5: string;
		3: string;
		3.5: string;
		4: string;
		5: string;
		6: string;
		7: string;
		8: string;
		9: string;
		10: string;
		12: string;
		14: string;
		16: string;
		20: string;
		24: string;
		28: string;
		32: string;
		36: string;
		40: string;
		44: string;
		48: string;
		52: string;
		56: string;
		60: string;
		64: string;
		72: string;
		80: string;
		96: string;
	};
	styles: Styles;
}
