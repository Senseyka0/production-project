import { useState } from "react";
import { useTranslation } from "react-i18next";

import { AboutUs, Arrow, Home } from "shared/assets/icons";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Link } from "shared/ui/Link";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { Routes } from "app/providers/router";

import cls from "./Sidebar.module.scss";

export const Sidebar = ({ className }: Props) => {
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
				<Link className={cls.link} to={Routes.HOME}>
					<Home fill="var(--primary-color)" width={20} />

					{!isCollapsed && t("Home")}
				</Link>

				<Link className={cls.link} to={Routes.ABOUT}>
					<AboutUs fill="var(--primary-color)" width={20} />

					{!isCollapsed && t("About")}
				</Link>
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
};

interface Props {
	className?: string;
}
