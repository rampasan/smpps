"use client";
import { usePathname, useRouter } from "next/navigation";
import { Button, IconButton, Typography } from "../exports";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { sideNavState } from "../atoms/sideNavState";
import { useRecoilState } from "recoil";
import { SafeUser } from "../types";

type Props = {
	currentUser: SafeUser | null;
	routes: {
		layout: string;
		title?: string;
		pages: {
			icon: JSX.Element;
			name: string;
			path: string;
		}[];
	}[];
};

const Sidebar = ({ routes, currentUser }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const [open, setOpen] = useRecoilState(sideNavState);

	return (
		<aside
			className={`${
				open ? "translate-x-0" : "-translate-x-80"
			} bg-gradient-to-br from-blue-gray-800 to-blue-gray-900 fixed inset-0 z-40 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0`}
		>
			<div className="relative border-b border-white/20">
				<div
					onClick={() => router.push("/")}
					className="flex items-center gap-4 py-6 px-8 cursor-pointer"
				>
					<Typography variant="h6" color="white">
						SMPPS
					</Typography>
				</div>
				<IconButton
					variant="text"
					color="white"
					size="sm"
					ripple={false}
					className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
					onClick={() => setOpen(false)}
				>
					<XMarkIcon
						strokeWidth={2.5}
						className="h-5 w-5 text-white"
					/>
				</IconButton>
			</div>
			<div className="m-4">
				<ul className="mb-4 flex flex-col gap-1">
					{routes.map(({ layout, title, pages }, key) => (
						<ul key={key} className="mb-4 flex flex-col gap-1">
							<li className="mx-3.5 mt-4 mb-2">
								<Typography
									variant="small"
									color="white"
									className="font-black uppercase opacity-75"
								>
									{title}
								</Typography>
							</li>

							{pages.map(({ icon, name, path }) => (
								<li key={name}>
									{currentUser?.role === "ADMIN" &&
									name === "admin" ? (
										<div onClick={() => router.push(path)}>
											<Button
												variant={
													pathname === path
														? "gradient"
														: "text"
												}
												color={
													pathname === path
														? "blue"
														: "white"
												}
												className="flex items-center gap-4 px-4 capitalize"
												fullWidth
											>
												{icon}
												<Typography>{name}</Typography>
											</Button>
										</div>
									) : (
										<div>
											<Button
												onClick={() =>
													router.push(path)
												}
												disabled={name === "admin"}
												variant={
													pathname === path
														? "gradient"
														: "text"
												}
												color={
													pathname === path
														? "blue"
														: "white"
												}
												className="flex items-center gap-4 px-4 capitalize"
												fullWidth
											>
												{icon}
												<Typography>{name}</Typography>
											</Button>
										</div>
									)}
								</li>
							))}
						</ul>
					))}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
