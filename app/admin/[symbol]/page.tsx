import AdminClient from "@/app/components/AdminClient";
import getStockDetails from "@/app/helpers/getStockDetails";
import { StockDetails } from "@/app/types";

interface IParams {
	symbol?: string;
}

const AdminSymbol = async ({ params }: { params: IParams }) => {
	const details: StockDetails = await getStockDetails(params);
	console.log(details);

	return (
		<div>
			<AdminClient
				country={details.country}
				currency={details.currency}
				estimateCurrency={details.estimateCurrency}
				exchange={details.exchange}
				finnhubIndustry={details.finnhubIndustry}
				ipo={details.ipo}
				marketCapitalization={details.marketCapitalization}
				name={details.name}
				phone={details.phone}
				shareOutstanding={details.shareOutstanding}
				ticker={details.ticker}
				logo={details.logo}
				weburl={details.weburl}
			/>
		</div>
	);
};

export default AdminSymbol;
