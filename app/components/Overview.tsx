/* eslint-disable react/no-unescaped-entities */
"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";

interface OverviewProps {
	country?: string;
	currency?: string;
	exchange?: string;
	ipo?: string;
	logo?: string;
	name?: string;
	ticker?: string;
	weburl?: string;
}

const Overview = ({
	country,
	currency,
	exchange,
	ipo,
	logo,
	name,
	ticker,
	weburl,
}: OverviewProps) => {
	return (
		<div className="w-full border-2 mx-3 rounded-lg p-2 bg-gray-900 text-white">
			<div className="flex flex-col items-center mx-auto">
				<Image
					src={logo!}
					alt="logo"
					height={50}
					width={50}
					className="rounded-full"
				/>
			</div>
			<hr className="my-4" />
			<div className="flex flex-row items-center justify-between">
				<Typography className="px-8 font-normal" variant="h4">
					{ticker}
				</Typography>
				<Typography className="px-8" variant="h4">
					{name}
				</Typography>
			</div>
			<hr className="my-4" />
			<div className="px-8">
				<Typography variant="h4" className="text-center">
					Exchange: {exchange}
				</Typography>
			</div>
			<hr className="my-4" />
			<div className="flex flex-row items-center justify-between">
				<div className="text-left px-8">
					<Typography variant="small" className="font-normal">
						IPO Date
					</Typography>
					<Typography variant="h4">{ipo}</Typography>
				</div>
				<div className="text-right px-8">
					<Typography variant="small" className="font-normal">
						{currency}
					</Typography>
					<Typography variant="h4">{country}</Typography>
				</div>
			</div>
			<hr className="my-4" />
			<div className="flex flex-row items-center justify-center">
				<Typography
					as="a"
					href={weburl}
					target="_blank"
					className="bg-transparent text-white p-4 hover:bg-blue-gray-800 transition duration-300 rounded-lg"
				>
					Visit {name}'s website
				</Typography>
			</div>
		</div>
	);
};

export default Overview;
