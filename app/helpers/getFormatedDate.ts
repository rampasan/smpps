export const convertDateToUnixTimeStamp = (date: Date) => {
	return Math.floor(date.getTime() / 1000);
};

export const convertUnixTimeStampToDate = (unixTimeStamp: number) => {
	const milliseconds = unixTimeStamp * 1000;
	return new Date(milliseconds).toLocaleDateString();
};

export const createDate = (
	date: Date,
	days: number,
	weeks: number,
	months: number,
	years: number
) => {
	let newDate = new Date(date);
	newDate.setDate(newDate.getDate() + days + 7 * weeks);
	newDate.setMonth(newDate.getMonth() + months);
	newDate.setFullYear(newDate.getFullYear() + years);
	return newDate;
};
