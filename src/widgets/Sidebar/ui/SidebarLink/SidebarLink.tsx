import { memo } from "react";
import { useTranslation } from "react-i18next";

import { Button, ButtonTheme } from "shared/ui/Button";
import { Link } from "shared/ui/Link";

import { ISidebarLink } from "../../model/sidebarItems";

import cls from "./SidebarLink.module.scss";

export const SidebarLink = memo(({ link, isCollapsed }: Props) => {
	const { t } = useTranslation();

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
