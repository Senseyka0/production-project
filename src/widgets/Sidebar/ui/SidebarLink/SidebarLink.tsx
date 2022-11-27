import { getUserIsAuth } from "entities/user";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Button, ButtonTheme } from "shared/ui/Button";
import { Link } from "shared/ui/Link";

import { ISidebarLink } from "../../model/sidebarItems";

import cls from "./SidebarLink.module.scss";

export const SidebarLink = memo(({ link, isCollapsed }: Props) => {
	const { t } = useTranslation();

	const isAuth = useSelector(getUserIsAuth);

	if (link.authOnly && !isAuth) {
		return null;
	}

	return (
		<Link className={cls.wrapper} to={link.path}>
			{isCollapsed ? (
				<Button theme={ButtonTheme.ICON}>{link.Icon}</Button>
			) : (
				<>
					{link.Icon}

					{t(link.text)}
				</>
			)}
		</Link>
	);
});

interface Props {
	link: ISidebarLink;
	isCollapsed: boolean;
}
