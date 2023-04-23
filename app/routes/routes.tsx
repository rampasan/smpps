import {
	HomeIcon,
	LockClosedIcon,
	NewspaperIcon,
	QueueListIcon,
} from "@heroicons/react/24/solid";

const icon = {
	className: "h-5 w-5 text-inherit",
};

export const routes = [
	{
		layout: "dashboard",
		pages: [
			{
				icon: <HomeIcon {...icon} />,
				name: "dashboard",
				path: "/",
			},
			{
				icon: <QueueListIcon {...icon} />,
				name: "browse",
				path: "/browse",
			},
			{
				icon: <NewspaperIcon {...icon} />,
				name: "news",
				path: "/news",
			},
		],
	},
	{
		title: "Admin",
		layout: "admin",
		pages: [
			{
				icon: <LockClosedIcon {...icon} />,
				name: "admin",
				path: "/admin",
			},
		],
	},
];
