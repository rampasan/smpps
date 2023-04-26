import { User } from "@prisma/client";

export type SafeUser = Omit<
	User,
	"createdAt" | "updatedAt" | "emailVerified"
> & {
	createdAt: string;
	updatedAt: string;
	emailVerified: string | null;
};

export type Article = {
	title: string;
	url: string;
	time_published?: string;
	authors?: string[];
	summary: string;
	banner_image?: string;
	source?: string;
	category_within_source?: string;
	source_domain?: string;
	topics?: string[];
	overall_sentiment_score: number;
	overall_sentiment_label: string;
	ticker_sentiment?: string[];
};

export type SearchResults = {
	count: number;
	result: Result[];
};

export type Result = {
	description: string;
	displaySymbol: string;
	symbol: string;
	type: string;
};

export type StockDetails = {
	country: string;
	currency: string;
	estimateCurrency: string;
	exchange: string;
	finnhubIndustry: string;
	ipo: string;
	logo?: string;
	marketCapitalization: number;
	name: string;
	phone: string;
	shareOutstanding: number;
	ticker: string;
	weburl?: string;
};

export type HistoricalData = {
	c: number[];
	h: number[];
	l: number[];
	o: number[];
	s: string;
	t: number[];
	v: number[];
};

export type Quote = {
	c: number;
	d: number;
	dp: number;
	h: number;
	l: number;
	o: number;
	pc: number;
	t: number;
};

export type Predictions = {
	DailyPrediction: number;
	WeeklyPrediction: number;
	MonthlyPrediction: number;
};
