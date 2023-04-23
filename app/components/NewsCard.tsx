/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Card, CardBody, CardFooter, CardHeader, Typography } from "../exports";

interface NewsCardProps {
	title: string;
	url: string;
	time_published?: string;
	authors?: string[];
	summary: string;
	banner_image?: string;
	source?: string;
	category_within_source?: string;
	source_domain?: string;
	topics?: string[];
	overall_sentiment_score: number;
	overall_sentiment_label: string;
	ticker_sentiment?: string[];
}

const NewsCard = ({
	overall_sentiment_label,
	overall_sentiment_score,
	summary,
	title,
	url,
	authors,
	banner_image,
	category_within_source,
	source,
	source_domain,
	ticker_sentiment,
	time_published,
	topics,
}: NewsCardProps) => {
	const isImage = banner_image !== "" && banner_image !== null;
	return (
		<Card className="col-span-1 cursor-pointer group">
			<Link href={url} target="_blank">
				{isImage && (
					<CardHeader>
						<img
							src={banner_image}
							alt="banner image"
							className="object-cover h-full w-full group-hover:scale-110 transition"
						/>
					</CardHeader>
				)}
				<CardBody className="text-center">
					<Typography variant="h5" className="mb-2 line-clamp-2">
						{title}
					</Typography>
					<Typography className="line-clamp-6">{summary}</Typography>
				</CardBody>
				<CardFooter
					divider
					className="flex items-center justify-between py-3"
				>
					<Typography variant="small" className="line-clamp-1">
						From {source}
					</Typography>
					<Typography
						variant="small"
						color="gray"
						className="flex gap-1 line-clamp-1"
					>
						By {authors?.[0]}
					</Typography>
				</CardFooter>
			</Link>
		</Card>
	);
};

export default NewsCard;
