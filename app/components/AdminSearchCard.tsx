"use client";

import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Typography,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";

type AdminSearchCardProps = {
	description: string;
	displaySymbol: string;
	symbol: string;
	type: string;
};

const AdminSearchCard = ({
	description,
	displaySymbol,
	symbol,
	type,
}: AdminSearchCardProps) => {
	const router = useRouter();
	return (
		<Card>
			<CardBody className="p-4 text-right">
				<Typography
					variant="small"
					className="font-normal text-blue-gray-600"
				>
					{symbol}
				</Typography>
				<Typography variant="h4" color="blue-gray">
					{description}
				</Typography>
			</CardBody>
			<CardFooter
				className="border-t border-blue-gray-50 p-4 hover:bg-blue-gray-100 rounded-b-lg cursor-pointer transition duration-300"
				onClick={() => router.push(`/admin/${symbol}`)}
			>
				View Details
			</CardFooter>
		</Card>
	);
};

export default AdminSearchCard;
