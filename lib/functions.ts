export function getPercentagesFromArray<T extends string>(data: T[]): { [k: string]: number } {
	const stats: { [k: string]: number } = Object.fromEntries(data.map(d => [d, 0]));
	const uniqueArray = Array.from(new Set(data));
	uniqueArray.forEach(
		item => (stats[item] = percentage(data.filter(d => d == item).length, data.length))
	);

	return stats;
}

export function percentage(partialValue: number, totalValue: number) {
	return (100 * partialValue) / totalValue;
}
