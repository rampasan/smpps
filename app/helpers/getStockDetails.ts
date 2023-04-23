interface IParams {
	symbol?: string;
}

export default async function getStockDetails({ symbol }: IParams) {
	const url = `https://finnhub.io/api/v1/stock/profile2?symbol=${symbol}&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`;
	const res = await fetch(url);
	if (!res.ok) {
		const message = `An error has occured: ${res.status}`;
		return new Error(message);
	}

	return await res.json();
}
