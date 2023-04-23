import BrowseCard from "../components/BrowseCard";
import getStocks from "../helpers/getStocks";

const BrowsePage = async () => {
	const stocks = await getStocks();

	return (
		<div className="mt-12">
			<div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
				{stocks.map((stock) => (
					<BrowseCard
						key={stock.ticker}
						ticker={stock.ticker}
						logo={stock.logo}
						currency={stock.currency}
						name={stock.name}
					/>
				))}
			</div>
		</div>
	);
};

export default BrowsePage;
