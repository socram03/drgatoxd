interface IconProps {
	id: string;
	className: string;
	type: 'solid' | 'regular' | 'brands' | 'duotone' | 'light';
	m: 'Left' | 'Right' | 'Top' | 'Bottom' | 'None';
	color: string;
	style: React.CSSProperties;
}

export const Icon = ({ id, className, type, m, color, style }: Partial<IconProps>) => {
	if (!id) id = 'circle';
	if (!type) type = 'solid';
	if (!m) m = 'None';
	if (!className) className = '';
	if (!style) style = {};

	const margin = { [`margin${m}`]: '0.5rem' };
	const styleToAssign = {
		...margin,
		...style,
		color: color || 'inherit'
	};

	return (
		<i
			style={styleToAssign}
			className={`fa-${type} fa-${id}${className.length ? ` ${className}` : ''}`}
		></i>
	);
};

export const GitIcon = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		height="28"
		viewBox="0 0 28 20"
		width="28"
		aria-hidden="true"
		className="git-icon"
	>
		<circle
			className="git-icon-circle"
			cx="14"
			cy="10"
			fill="#121212"
			r="5"
			stroke="#dadfe9"
			strokeWidth="2"
		></circle>
	</svg>
);
