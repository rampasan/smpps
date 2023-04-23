/* eslint-disable react/no-unescaped-entities */
"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface AdminClientProps {
	country: string;
	currency: string;
	estimateCurrency: string;
	exchange: string;
	finnhubIndustry: string;
	ipo: string;
	logo?: string;
	marketCapitalization: number;
	name: string;
	phone: string;
	shareOutstanding: number;
	ticker: string;
	weburl?: string;
}

const AdminClient = ({
	country,
	currency,
	estimateCurrency,
	exchange,
	finnhubIndustry,
	ipo,
	marketCapitalization,
	name,
	phone,
	shareOutstanding,
	ticker,
	weburl,
	logo,
}: AdminClientProps) => {
	const router = useRouter();

	const onCreateStock = useCallback(() => {
		axios
			.post("/api/admin", {
				country,
				currency,
				estimateCurrency,
				exchange,
				finnhubIndustry,
				ipo,
				marketCapitalization,
				name,
				phone,
				shareOutstanding,
				ticker,
				weburl,
				logo,
			})
			.then(() => {
				toast.success("Stock added to system");
				router.push("/browse");
			})
			.catch((error) => {
				toast.error("Something went wrong");
				console.log(error);
			});
	}, [
		country,
		currency,
		estimateCurrency,
		exchange,
		finnhubIndustry,
		ipo,
		logo,
		marketCapitalization,
		name,
		phone,
		router,
		shareOutstanding,
		ticker,
		weburl,
	]);

	return (
		<>
			<div className="max-w-lg flex flex-col items-center mx-auto my-5">
				<div>
					{logo && (
						<Image
							src={logo}
							alt="logo"
							height={50}
							width={50}
							className="object-contain rounded-full"
						/>
					)}
				</div>
				<Typography variant="h3" className="my-3 tracking-wide">
					Company: {name}, ({ticker})
				</Typography>
				<hr />
			</div>
			<div className="flex flex-row justify-between max-w-lg mx-auto">
				<div className="py-4 px-5 border-2 border-gray-600 bg-blue-gray-600 rounded-md text-white font-bold">
					Country: {country}
				</div>
				<div className="py-4 px-5 border-2 border-gray-600 bg-blue-gray-600 rounded-md text-white font-bold">
					Currency: {currency}
				</div>
			</div>
			<div className="flex flex-col items-center max-w-lg mx-auto">
				<Typography variant="h5" className="py-4">
					IPO Date: {ipo}
				</Typography>
			</div>
			{weburl && (
				<div className="flex flex-col items-center max-w-lg mx-auto">
					<Typography
						as="a"
						href={weburl}
						target="_blank"
						className="border-2 bg-blue-500 hover:bg-blue-800 font-bold text-lg transition duration-300 px-4 py-4 rounded-md"
					>
						{name}'s Home Page
					</Typography>
				</div>
			)}
			<div className="max-w-lg my-3 flex flex-col items-center mx-auto">
				<CustomButton
					label={`Add ${ticker} to the system`}
					onClick={onCreateStock}
					outline
				/>
			</div>
		</>
	);
};

export default AdminClient;
