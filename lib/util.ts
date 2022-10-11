export function isoDateToCalendarString(date: string) {
	const d = new Date(date);
	return `${padNum(d.getDate())}/${padNum(d.getMonth() + 1)}/${d.getFullYear()}`;
}

export function padNum(num: number) {
	return num < 10 ? '0' + num : num;
}

export function capitalize(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
