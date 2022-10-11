import { Text } from '@chakra-ui/react';
import type { Property } from 'csstype';

export function Icon({
	v,
	id,
	className,
	c,
	m,
	s,
	pt,
	pb,
	pl,
	pr,
	onMouseEnter,
	onMouseLeave,
	onClick,
	cursor
}: {
	v?: 's' | 'r' | 'l' | 't' | 'd' | 'b';
	id: string;
	className?: string;
	c?: Property.Color;
	m?: 'Left' | 'Right' | 'Top' | 'Bottom' | 'none';
	s?: string;
	pt?: string;
	pb?: string;
	pl?: string;
	pr?: string;
	onMouseEnter?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onMouseLeave?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
	cursor?: 'pointer';
}) {
	if (!v) v = 's';
	if (!c) c = 'inherit';
	if (!m) m = 'none';
	if (!s) s = '.8rem';
	if (!pt) pt = '0';
	if (!pb) pb = '0';
	if (!pl) pl = '0';
	if (!pr) pr = '0';

	const styleToAssign = {
		[`margin${m}`]: '0.5rem'
	};

	return (
		<Text
			as={'i'}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={onClick}
			cursor={cursor}
			className={`fa${v} fa-${id}${className?.length ? ` ${className}` : ''}`}
			style={styleToAssign}
			color={c}
			fontSize={s}
			paddingTop={pt}
			paddingBottom={pb}
			paddingLeft={pl}
			paddingRight={pr}
		></Text>
	);
}
