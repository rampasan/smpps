"use client";

import { CheckIcon } from "@heroicons/react/24/solid";
import useFollow from "../hooks/useFollow";
import { SafeUser } from "../types";

interface FollowButtonProps {
	stockId: string;
	currentUser?: SafeUser | null;
}

const FollowButton = ({ stockId, currentUser }: FollowButtonProps) => {
	const { hasFollowed, toggleFollow } = useFollow({ stockId, currentUser });
	return (
		<div
			onClick={toggleFollow}
			className={`flex flex-row w-40 rounded-lg mt-12 relative cursor-pointer border-2 p-4 border-black transition duration-300 items-center justify-center ${
				hasFollowed
					? "text-white bg-blue-700 hover:bg-blue-900"
					: "text-black bg-blue-100 hover:bg-blue-200"
			}`}
		>
			<CheckIcon className="h-5 w-5 absolute top-4 left-4" />
			{hasFollowed ? <div>Followed</div> : <div>Follow</div>}
		</div>
	);
};

export default FollowButton;
