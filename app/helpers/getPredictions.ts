export default async function getPrediction(ticker: string) {
	const url = `http://127.0.0.1:5000/predict?signal=${ticker}`;
	const predictions = await fetch(url, {
		method: "GET",
		headers: { accept: "application/json" },
	});

	return await predictions.json();
}
