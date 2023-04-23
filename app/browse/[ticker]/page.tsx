import Chart from "@/app/components/Chart";
import Overview from "@/app/components/Overview";
import { chartConfig } from "@/app/constants/chartConfig";
import {
	convertDateToUnixTimeStamp,
	convertUnixTimeStampToDate,
	createDate,
} from "@/app/helpers/getFormatedDate";
import getHistoricalData from "@/app/helpers/getHistoricalData";
import getStockByTicker from "@/app/helpers/getStockByTicker";
import { HistoricalData } from "@/app/types";

interface IParams {
	ticker: string;
}

const StockDetailPage = async ({ params }: { params: IParams }) => {
	const { ticker } = params;

	const details = await getStockByTicker({ ticker });

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

	console.log(details);

	return (
		<div>
			<Chart data={data} volume={volume} ticker={ticker} />
			<div className="grid grid-cols-2">
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
			</div>
		</div>
	);
};

export default StockDetailPage;
