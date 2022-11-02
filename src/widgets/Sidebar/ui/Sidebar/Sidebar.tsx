import { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Arrow } from "shared/assets/icons";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import { sidebarLinkList } from "../../model/sidebarItems";
import { SidebarLink } from "../SidebarLink/SidebarLink";

import cls from "./Sidebar.module.scss";

export const Sidebar = memo(({ className }: Props) => {
	const { t } = useTranslation();

	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames(cls.wrapper, { [cls.collapsed]: isCollapsed }, [className])}
		>
			<div className={cls.links}>
				{sidebarLinkList.map((link) => (
					<SidebarLink key={link.path} link={link} isCollapsed={isCollapsed} />
				))}
			</div>

			<div className={cls.switchers}>
				<ThemeSwitcher />

				<LanguageSwitcher />
			</div>

			<Button
				data-testid="sidebar-toggle"
				className={classNames(cls["toggle-sidebar"], { [cls.collapsed]: isCollapsed })}
				theme={ButtonTheme.ICON}
				onClick={toggleSidebar}
			>
				<Arrow fill="var(--primary-color)" />
			</Button>
		</div>
	);
});

interface Props {
	className?: string;
}
