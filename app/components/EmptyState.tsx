"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import CustomButton from "./CustomButton";

interface EmptyStateProps {
	title?: string;
	subtitle?: string;
	showHome?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
	title = "No exact matches",
	subtitle = "Try changing or removing some of your filters",
	showHome,
}) => {
	const router = useRouter();
	return (
		<div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
			<Heading title={title} subtitle={subtitle} center />
			<div className="w-48 mt-4">
				{showHome && (
					<CustomButton
						outline
						label="Go Back"
						onClick={() => router.push("/")}
					/>
				)}
			</div>
		</div>
	);
};

export default EmptyState;
