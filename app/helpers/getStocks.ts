import prisma from "../lib/prismadb";

export default async function getStocks() {
	try {
		const stocks = await prisma.stock.findMany({});
		return stocks;
	} catch (error: any) {
		throw new Error(error);
	}
}
