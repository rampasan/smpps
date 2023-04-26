import getCurrentUser from "@/app/helpers/getCurrentUser";
import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";

interface IParams {
	stockId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	const { stockId } = params;

	if (!stockId || typeof stockId !== "string") {
		throw new Error("Invalid ID");
	}

	let followIds = [...(currentUser.followedStocks || [])];

	followIds.push(stockId);

	const user = await prisma.user.update({
		where: {
			id: currentUser.id,
		},
		data: {
			followedStocks: followIds,
		},
	});

	return NextResponse.json(user);
}

export async function DELETE(
	request: Request,
	{ params }: { params: IParams }
) {
	const currentUser = await getCurrentUser();

	if (!currentUser) {
		return NextResponse.error();
	}

	const { stockId } = params;

	if (!stockId || typeof stockId !== "string") {
		throw new Error("Invalid ID");
	}

	let followIds = [...(currentUser.followedStocks || [])];

	followIds = followIds.filter((id) => id !== stockId);

	const user = await prisma.user.update({
		where: {
			id: currentUser.id,
		},
		data: {
			followedStocks: followIds,
		},
	});

	return NextResponse.json(user);
}
