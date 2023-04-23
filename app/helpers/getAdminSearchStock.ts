export default async function getAdminSearchStock(query: string) {
	const url = `https://finnhub.io/api/v1/search?q=${query}&token=${process.env.NEXT_PUBLIC_FINNHUB_API_KEY}`;
	const res = await fetch(url);
	if (!res.ok) {
		const message = `An error has occured: ${res.status}`;
		return new Error(message);
	}

	return await res.json();
}
