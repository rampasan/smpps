"use client";

import { Bars3Icon, UserCircleIcon } from "@heroicons/react/24/solid";
import {
	Avatar,
	Breadcrumbs,
	Button,
	IconButton,
	Input,
	Navbar,
	Typography,
} from "../exports";
import { usePathname, useRouter } from "next/navigation";
import { sideNavState } from "../atoms/sideNavState";
import { useRecoilState } from "recoil";
import useLoginModal from "../hooks/useLoginModal";
import { SafeUser } from "../types";
import { signOut } from "next-auth/react";

interface NavProps {
	currentUser: SafeUser | null;
}

const Nav = ({ currentUser }: NavProps) => {
	const pathname = usePathname();
	const router = useRouter();
	// const [layout, page] = pathname.split("/").filter((el) => el !== "");
	const [open, setOpen] = useRecoilState(sideNavState);
	const loginModal = useLoginModal();

	return (
		<Navbar
			color="white"
			className="rounded-xl transition-all sticky top-4 z-30 py-3 shadow-md shadow-blue-gray-500/5"
			fullWidth
			blurred
		>
			<div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
				{/* <div className="capitalize">
					<Breadcrumbs className="bg-transparent p-0 transition-all mt-1">
						<div onClick={() => router.push(`/${layout}`)}>
							<Typography
								variant="small"
								color="blue-gray"
								className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
							>
								{layout}
							</Typography>
						</div>
						{page && (
							<Typography
								variant="small"
								color="blue-gray"
								className="font-normal"
							>
								{page}
							</Typography>
						)}
					</Breadcrumbs>
					<Typography variant="h6" color="blue-gray">
						{layout === undefined ? "Dashboard" : layout}
					</Typography>
				</div> */}
				<div className="flex items-center">
					<div className="mr-auto md:mr-4 md:w-56">
						<Input label="Search" />
					</div>
					<IconButton
						variant="text"
						color="blue-gray"
						className="grid xl:hidden"
						onClick={() => {
							setOpen(!open);
						}}
					>
						<Bars3Icon
							strokeWidth={3}
							className="h-6 w-6 text-blue-gray-500"
						/>
					</IconButton>
					{currentUser ? (
						<div>
							{currentUser.image ? (
								<>
									<Button
										onClick={() => signOut()}
										variant="text"
										color="blue-gray"
										className="hidden items-center gap-1 px-4 xl:flex"
									>
										<Avatar
											src={currentUser.image}
											className="h-5 w-5"
										/>
										{currentUser.name || currentUser.email}
									</Button>
									<IconButton
										onClick={() => signOut()}
										variant="text"
										color="blue-gray"
										className="grid xl:hidden"
									>
										<Avatar
											src={currentUser.image}
											className="h-5 w-5"
										/>
									</IconButton>
								</>
							) : (
								<>
									<Button
										onClick={() => signOut()}
										variant="text"
										color="blue-gray"
										className="hidden items-center gap-1 px-4 xl:flex"
									>
										<UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
										{currentUser.name || currentUser.email}
									</Button>
									<IconButton
										onClick={() => signOut()}
										variant="text"
										color="blue-gray"
										className="grid xl:hidden"
									>
										<UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
									</IconButton>
								</>
							)}
						</div>
					) : (
						<div onClick={loginModal.onOpen}>
							<Button
								variant="text"
								color="blue-gray"
								className="hidden items-center gap-1 px-4 xl:flex"
							>
								<UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
								Sign In
							</Button>
							<IconButton
								variant="text"
								color="blue-gray"
								className="grid xl:hidden"
							>
								<UserCircleIcon className="h-5 w-5 text-blue-gray-500" />
							</IconButton>
						</div>
					)}
					{/* Menu */}
				</div>
			</div>
		</Navbar>
	);
};

export default Nav;
