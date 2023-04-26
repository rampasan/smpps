import Chart from "@/app/components/Chart";
import FollowButton from "@/app/components/FollowButton";
import Overview from "@/app/components/Overview";
import PredictionCard from "@/app/components/PredictionCard";
import QuoteCard from "@/app/components/QuoteCard";
import { chartConfig } from "@/app/constants/chartConfig";
import getCurrentUser from "@/app/helpers/getCurrentUser";
import {
	convertDateToUnixTimeStamp,
	convertUnixTimeStampToDate,
	createDate,
} from "@/app/helpers/getFormatedDate";
import getHistoricalData from "@/app/helpers/getHistoricalData";
import getPrediction from "@/app/helpers/getPredictions";
import getQuote from "@/app/helpers/getQuote";
import getStockByTicker from "@/app/helpers/getStockByTicker";
import { HistoricalData, Predictions, Quote } from "@/app/types";

interface IParams {
	ticker: string;
}

const StockDetailPage = async ({ params }: { params: IParams }) => {
	const { ticker } = params;

	const details = await getStockByTicker({ ticker });
	const quote: Quote = await getQuote(ticker);
	const predictions: Predictions = await getPrediction(ticker);
	const currentUser = await getCurrentUser();

	const { days, weeks, months, years, resolution } = chartConfig["1Y"];
	const endDate = new Date();
	const startDate = createDate(endDate, -days, -weeks, -months, -years);

	const startTimeStampUnix = convertDateToUnixTimeStamp(startDate);
	const endTimeStampUnix = convertDateToUnixTimeStamp(endDate);

	const historicalData: HistoricalData = await getHistoricalData({
		from: startTimeStampUnix,
		to: endTimeStampUnix,
		resolution: resolution,
		stockSymbol: ticker,
	});

	const processData = (historicalData: HistoricalData) => {
		return historicalData.c.map((item, index) => {
			return [
				convertUnixTimeStampToDate(historicalData.t[index]),
				historicalData.o[index],
				historicalData.h[index],
				historicalData.l[index],
				item,
			];
		});
	};

	const processVolume = (historicalData: HistoricalData) => {
		return historicalData.t.map((item, index) => {
			return [convertUnixTimeStampToDate(item), historicalData.v[index]];
		});
	};

	const data = processData(historicalData);

	const volume = processVolume(historicalData);

	return (
		<div>
			<FollowButton stockId={details!.id} currentUser={currentUser} />
			<Chart data={data} volume={volume} ticker={ticker} />
			<div className="grid grid-cols-1 md:grid-cols-2 my-2">
				<Overview
					country={details?.country}
					currency={details?.currency}
					exchange={details?.exchange}
					ipo={details?.ipo}
					logo={details?.logo}
					name={details?.name}
					ticker={details?.ticker}
					weburl={details?.weburl}
				/>
				<div className="flex flex-col mx-3">
					<QuoteCard
						ticker={ticker}
						currency={details!.currency}
						c={quote.c}
						d={quote.d}
						dp={quote.dp}
						pc={quote.pc}
					/>
					<PredictionCard
						title="Daily Prediction"
						prediction={predictions.DailyPrediction}
						currency={details!.currency}
					/>
					<PredictionCard
						title="Weekly Prediction"
						prediction={predictions.WeeklyPrediction}
						currency={details!.currency}
					/>
					<PredictionCard
						title="Monthly Prediction"
						prediction={predictions.MonthlyPrediction}
						currency={details!.currency}
					/>
				</div>
			</div>
		</div>
	);
};

export default StockDetailPage;
