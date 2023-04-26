import prisma from "../lib/prismadb";
import getCurrentUser from "./getCurrentUser";

export default async function getFollowedStocks() {
	try {
		const currentUser = await getCurrentUser();

		if (!currentUser) {
			return [];
		}

		const followed = await prisma.stock.findMany({
			where: {
				id: {
					in: [...(currentUser.followedStocks || [])],
				},
			},
		});

		return followed;
	} catch (error: any) {
		throw new Error(error);
	}
}
