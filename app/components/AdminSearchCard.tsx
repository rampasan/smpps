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
		<Card
			onClick={() => router.push(`/admin/${symbol}`)}
			className="hover:scale-110 transition duration-300 cursor-pointer hover:shadow-xl"
		>
			<CardBody className="p-4 text-right">
				<Typography
					variant="small"
					className="font-normal text-blue-gray-600"
				>
					{symbol}
				</Typography>
				<Typography
					variant="h4"
					color="blue-gray"
					className="line-clamp-1 pt-2"
				>
					{description}
				</Typography>
			</CardBody>
		</Card>
	);
};

export default AdminSearchCard;
