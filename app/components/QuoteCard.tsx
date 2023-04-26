interface QuoteCardProps {
	ticker: string;
	currency: string;
	d: number;
	c: number;
	dp: number;
	pc: number;
}

const QuoteCard = ({ ticker, currency, d, c, dp, pc }: QuoteCardProps) => {
	return (
		<div className="w-full h-36 rounded-md relative p-8 border-2 bg-gray-900 text-white">
			<span className="absolute left-4 top-4 text-white text-lg xl:text-xl 2xl:text-2xl">
				{ticker}
			</span>
			<div className="w-full flex items-center justify-around p-6">
				<span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
					${c.toFixed(2)}
					<span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
						{currency}
					</span>
				</span>
				<span
					className={`text-lg xl:text-xl 2xl:text-2xl ${
						d > 0 ? "text-lime-500" : "text-red-500"
					}`}
				>
					{d} <span>({dp}%)</span>
				</span>
			</div>
		</div>
	);
};

export default QuoteCard;
