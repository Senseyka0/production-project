import { ReactNode } from "react";

import { Routes } from "app/providers/router";
import { AboutUs, Home, Profile } from "shared/assets/icons";

export interface ISidebarLink {
	path: string;
	text: string;
	Icon?: ReactNode;
	authOnly?: boolean;
}

export const sidebarLinkList: ISidebarLink[] = [
	{
		path: Routes.HOME,
		text: "Home",
		Icon: <Home fill="var(--primary-color)" width={22} />,
	},
	{
		path: Routes.ABOUT,
		text: "About",
		Icon: <AboutUs fill="var(--primary-color)" width={22} />,
	},
	{
		path: Routes.PROFILE,
		text: "Profile",
		Icon: <Profile fill="var(--primary-color)" width={22} />,
		authOnly: true,
	},
];
