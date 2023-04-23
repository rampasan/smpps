import prisma from "../lib/prismadb";

interface IParams {
	ticker?: string;
}

export default async function getStockByTicker({ ticker }: IParams) {
	try {
		const stock = await prisma.stock.findFirst({
			where: {
				ticker: ticker,
			},
		});

		if (!stock) {
			return null;
		}

		return stock;
	} catch (error: any) {
		throw new Error(error);
	}
}
