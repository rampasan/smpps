import NewsCard from "../components/NewsCard";
import getNews from "../helpers/getNews";
import { Article } from "../types";

export const revalidate = 3600;

const NewsPage = async () => {
	const json = await getNews();
	const news = json.feed;
	console.log(news);

	return (
		<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
			{news.map((article: Article) => (
				<NewsCard
					key={article.title}
					title={article.title}
					url={article.url}
					overall_sentiment_label={article.overall_sentiment_label}
					overall_sentiment_score={article.overall_sentiment_score}
					summary={article.summary}
					authors={article.authors}
					banner_image={article.banner_image}
					category_within_source={article.category_within_source}
					source={article.source}
					source_domain={article.source_domain}
					ticker_sentiment={article.ticker_sentiment}
					time_published={article.time_published}
					topics={article.topics}
				/>
			))}
		</div>
	);
};

export default NewsPage;
