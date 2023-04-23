"use client";

import { useState } from "react";
import { Button, Input } from "../exports";
import getAdminSearchStock from "../helpers/getAdminSearchStock";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import AdminSearchCard from "./AdminSearchCard";
import { Result } from "../types";

interface AdminSearchProps {}

const AdminSearch = ({}: AdminSearchProps) => {
	const [input, setInput] = useState("");
	const [bestMatches, setBestMatches] = useState([]);

	const updateBestMatches = async () => {
		try {
			if (input) {
				const searchResults = await getAdminSearchStock(input);
				const result = searchResults.result;
				setBestMatches(result);
			}
		} catch (error) {
			setBestMatches([]);
			console.log(error);
		}
	};

	console.log(bestMatches);

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<div className="relative flex w-full max-w-[24rem]">
					<Input
						value={input}
						label="Search Stocks"
						size="lg"
						className="bg-white"
						onChange={(e) => {
							setInput(e.target.value);
						}}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								updateBestMatches();
							}
						}}
					/>
					<Button
						size="sm"
						color={input ? "blue" : "blue-gray"}
						disabled={!input}
						className="!absolute right-1 top-1 rounded"
						onClick={updateBestMatches}
					>
						<MagnifyingGlassIcon className="h-5 w-5" />
					</Button>
				</div>
				<div className="mt-12">
					<div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
						{bestMatches?.length > 0
							? bestMatches.map((result: Result) => (
									<AdminSearchCard
										key={result.symbol}
										description={result.description}
										displaySymbol={result.displaySymbol}
										symbol={result.symbol}
										type={result.type}
									/>
							  ))
							: null}
					</div>
				</div>
			</div>
		</>
	);
};

export default AdminSearch;
