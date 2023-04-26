"use client";

import { useEffect, useState } from "react";
import getQuote from "../helpers/getQuote";
import {
	Card,
	CardBody,
	CardHeader,
	Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { Quote } from "../types";
import { useRouter } from "next/navigation";

interface DashboardQuoteCardProps {
	ticker: string;
	logo: string;
}

const DashboardQuoteCard = ({ ticker, logo }: DashboardQuoteCardProps) => {
	const [quote, setQuote] = useState<Quote | null>(null);
	const router = useRouter();

	useEffect(() => {
		const fetchQuote = async (ticker: string) => {
			const quote: Quote = await getQuote(ticker);
			setQuote(quote);
		};

		fetchQuote(ticker);
	}, [ticker]);

	console.log(quote);

	return (
		<div>
			{quote && (
				<Card
					className="hover:scale-110 transition duration-300 cursor-pointer hover:shadow-xl"
					onClick={() => router.push(`/browse/${ticker}`)}
				>
					<CardHeader
						variant="gradient"
						className="absolute -mt-4 grid h-16 w-16 place-items-center"
					>
						<Image
							src={logo}
							alt="logo"
							height={50}
							width={50}
							className="rounded-lg"
						/>
					</CardHeader>
					<CardBody className="p-4 text-right">
						<Typography
							variant="small"
							className="font-normal text-blue-gray-600"
						>
							{ticker}
						</Typography>
						<Typography variant="h4" color="blue-gray">
							${quote.c.toFixed(2)}
						</Typography>
						<Typography
							variant="small"
							className={`${
								quote.d > 0 ? "text-lime-500" : "text-red-500"
							}`}
						>
							{quote.d} ({quote.dp}%)
						</Typography>
					</CardBody>
				</Card>
			)}
		</div>
	);
};

export default DashboardQuoteCard;
