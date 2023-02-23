import { ScaleFade, type ScaleFadeProps, SlideFade, type SlideFadeProps } from '@chakra-ui/react';

export function Slide({ children, ...props }: { children: React.ReactNode } & SlideFadeProps) {
	return (
		<SlideFade transition={{ enter: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }} {...props}>
			{children}
		</SlideFade>
	);
}

export function Scale({ children, ...props }: { children: React.ReactNode } & ScaleFadeProps) {
	return (
		<ScaleFade
			transition={{
				enter: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: props.delay as number }
			}}
			{...props}
		>
			{children}
		</ScaleFade>
	);
}
