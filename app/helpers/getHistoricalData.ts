interface IParams {
	stockSymbol: string;
	resolution: string;
	from: number;
	to: number;
}

export default async function getHistoricalData({
	from,
	resolution,
	stockSymbol,
	to,
}: IParams) {
	const url = `https://finnhub.io/api/v1/stock/candle?symbol=${stockSymbol}&resolution=${resolution}&from=${from}&to=${to}&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`;
	const res = await fetch(url);

	if (!res.ok) {
		const message = `An error has occured: ${res.status}`;
		throw new Error(message);
	}

	return await res.json();
}
