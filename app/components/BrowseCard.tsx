"use client";

import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BrowseCardProps {
	ticker: string;
	logo: string;
	name: string;
	currency: string;
}

const BrowseCard = ({ ticker, name, logo, currency }: BrowseCardProps) => {
	const router = useRouter();
	return (
		<div>
			<Card>
				<CardHeader
					variant="gradient"
					className="absolute -mt-4 grid h-16 w-16 place-items-center"
				>
					<Image
						src={logo}
						width={50}
						height={50}
						alt="logo"
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
						{name}
					</Typography>
				</CardBody>
				<CardFooter
					onClick={() => router.push(`/browse/${ticker}`)}
					className="border-t border-blue-gray-50 p-4 hover:bg-blue-gray-100 rounded-b-lg cursor-pointer transition duration-300"
				>
					View Details
				</CardFooter>
			</Card>
		</div>
	);
};

export default BrowseCard;
