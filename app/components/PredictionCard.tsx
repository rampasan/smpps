interface PredictionCardProps {
	title: string;
	prediction: number;
	currency: string;
}

const PredictionCard = ({
	title,
	prediction,
	currency,
}: PredictionCardProps) => {
	return (
		<div className="w-full h-36 rounded-md relative p-8 border-2 bg-gray-900 text-white">
			<span className="absolute left-4 top-4 text-white text-lg xl:text-xl 2xl:text-2xl">
				{title}
			</span>
			<div className="w-full flex items-center justify-around p-6">
				<span className="text-2xl xl:text-4xl 2xl:text-5xl flex items-center">
					${(Math.round(prediction * 100) / 100).toFixed(2)}
					<span className="text-lg xl:text-xl 2xl:text-2xl text-neutral-400 m-2">
						{currency}
					</span>
				</span>
			</div>
		</div>
	);
};

export default PredictionCard;
