import BrowseCard from "./components/BrowseCard";
import DashboardQuoteCard from "./components/DashboardQuoteCard";
import EmptyState from "./components/EmptyState";
import Heading from "./components/Heading";
import getCurrentUser from "./helpers/getCurrentUser";
import getFollowedStocks from "./helpers/getFollowedStocks";
import getStocks from "./helpers/getStocks";

export default async function Home() {
	const follows = await getFollowedStocks();
	const currentUser = await getCurrentUser();
	const stocks = await getStocks();
	const indexes = [];

	while (indexes.length < 4 && stocks.length > 0) {
		const randomIndex = Math.floor(Math.random() * stocks.length);
		indexes.push(stocks[randomIndex]);
		stocks.splice(randomIndex, 1);
	}

	console.log(follows);

	return (
		<div className="mt-12">
			<div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
				{indexes.map((item) => (
					<DashboardQuoteCard
						key={item.id}
						ticker={item.ticker}
						logo={item.logo}
					/>
				))}
			</div>
			<hr />
			{follows.length === 0 ? (
				<EmptyState
					title="You don't seem to be following any stocks"
					subtitle="Follow some stocks to easily view them from the dashboard"
				/>
			) : (
				<div>
					<Heading
						title="Stocks Followed"
						subtitle="View your followed stocks here"
					/>
					<div className="mb-12 mt-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
						{follows.map((follow) => (
							<BrowseCard
								key={follow.id}
								logo={follow.logo}
								currency={follow.currency}
								name={follow.name}
								ticker={follow.ticker}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
