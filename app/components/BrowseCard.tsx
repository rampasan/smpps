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
			<Card
				onClick={() => router.push(`/browse/${ticker}`)}
				className="hover:scale-110 transition duration-300 cursor-pointer hover:shadow-xl"
			>
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
					<Typography
						variant="h4"
						color="blue-gray"
						className="line-clamp-1 py-2"
					>
						{name}
					</Typography>
				</CardBody>
			</Card>
		</div>
	);
};

export default BrowseCard;
