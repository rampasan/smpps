"use client";

import { useRef } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Indicators from "highcharts/indicators/indicators-all";
import DragPanes from "highcharts/modules/drag-panes";
import AnnotationsAdvanced from "highcharts/modules/annotations-advanced";
import PriceIndicator from "highcharts/modules/price-indicator";
import FullScreen from "highcharts/modules/full-screen";
import StockTools from "highcharts/modules/stock-tools";
import HighchartsStock from "highcharts/modules/stock";

interface ChartProps {
	data: (string | number)[][];
	volume: (string | number)[][];
	ticker: string;
}

const Chart = ({ data, volume, ticker }: ChartProps) => {
	if (typeof Highcharts === "object") {
		// init the module
		// Indicators(Highcharts);
		DragPanes(Highcharts);
		AnnotationsAdvanced(Highcharts);
		PriceIndicator(Highcharts);
		FullScreen(Highcharts);
		StockTools(Highcharts);
		HighchartsStock(Highcharts);
	}
	const chartRef = useRef<HighchartsReact.RefObject>(null);
	const groupingUnits = [
		[
			"week", // unit name
			[1], // allowed multiples
		],
		["month", [1, 2, 3, 4, 6]],
	];
	const options: Highcharts.Options = {
		plotOptions: {
			candlestick: {
				color: "red",
				upColor: "green",
			},
		},
		rangeSelector: {
			selected: 1,
		},
		title: {
			text: `${ticker} for the past year`,
		},
		xAxis: [
			{
				type: "datetime",
			},
			{
				type: "datetime",
			},
		],
		yAxis: [
			{
				labels: {
					align: "right",
					x: -3,
				},
				title: {
					text: "OHLC",
				},
				height: "60%",
				lineWidth: 2,
				resize: {
					enabled: true,
				},
			},
			{
				labels: {
					align: "right",
					x: -3,
				},
				title: {
					text: "Volume",
				},
				top: "65%",
				height: "35%",
				offset: 0,
				lineWidth: 2,
			},
		],
		tooltip: {
			split: true,
		},
		series: [
			{
				type: "candlestick",
				name: `${ticker}`,
				data: data,
			},
			{
				type: "column",
				name: "Volume",
				data: volume,
				yAxis: 1,
			},
		],
	};
	return (
		<div className="mt-12">
			<HighchartsReact
				highcharts={Highcharts}
				constructorType={"stockChart"}
				options={options}
				ref={chartRef}
			/>
		</div>
	);
};

export default Chart;
