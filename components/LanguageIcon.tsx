import { Image, Spinner, Tooltip, useColorMode } from '@chakra-ui/react';

export const LanguageIcon = ({ name, id, size }: { name: string; id: string; size?: string }) => {
	const { colorMode } = useColorMode();
	return (
		<Tooltip label={name} rounded={'xl'} fontWeight={600}>
			<Image
				w={size}
				h={size}
				fallback={<Spinner w={size || '50px'} h={size || '50px'} />}
				src={`https://skillicons.dev/icons?i=${id}&theme=${
					colorMode == 'light' ? 'light' : 'dark'
				}`}
				alt={name}
			/>
		</Tooltip>
	);
};
