import { NextResponse } from "next/server";
import prisma from "@/app/lib/prismadb";

export async function POST(request: Request) {
	const body = await request.json();
	const {
		country,
		currency,
		estimateCurrency,
		exchange,
		finnhubIndustry,
		ipo,
		marketCapitalization,
		name,
		phone,
		shareOutstanding,
		ticker,
		weburl,
		logo,
	} = body;

	if (
		!country ||
		!currency ||
		!estimateCurrency ||
		!exchange ||
		!finnhubIndustry ||
		!ipo ||
		!name ||
		!phone ||
		!ticker ||
		!weburl ||
		!logo
	) {
		return NextResponse.error();
	}

	const stock = await prisma.stock.create({
		data: {
			country,
			currency,
			estimateCurrency,
			exchange,
			finnhubIndustry,
			ipo,
			marketCapitalization,
			name,
			phone,
			shareOutstanding,
			ticker,
			weburl,
			logo,
		},
	});

	return NextResponse.json(stock);
}
