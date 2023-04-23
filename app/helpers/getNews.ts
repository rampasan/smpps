export default async function getNews() {
	const baseUrl = "https://www.alphavantage.co";
	const res = await fetch(
		`${baseUrl}/query?function=NEWS_SENTIMENT&sort=LATEST&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`
	);
	const news = await res.json();
	return news;
}
