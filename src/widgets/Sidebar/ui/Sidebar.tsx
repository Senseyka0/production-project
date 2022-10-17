import { useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/libs/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { LanguageSwitcher } from "widgets/LanguageSwitcher";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import cls from "./Sidebar.module.scss";

export const Sidebar = ({ className }: Props) => {
	const { t } = useTranslation();
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className={classNames(cls.wrapper, { [cls.collapsed]: isCollapsed }, [className])}>
			<Button theme={ButtonTheme.TEXT} onClick={toggleSidebar}>
				{t("Toggle")}
			</Button>

			<div className={cls.switchers}>
				<ThemeSwitcher />

				<LanguageSwitcher />
			</div>
		</div>
	);
};

interface Props {
	className?: string;
}
