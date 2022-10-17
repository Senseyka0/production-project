import { useState } from "react";

import { classNames } from "shared/libs/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import cls from "./Sidebar.module.scss";

export const Sidebar = ({ className }: Props) => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<div className={classNames(cls.wrapper, { [cls.collapsed]: isCollapsed }, [className])}>
			<Button theme={ButtonTheme.TEXT} onClick={toggleSidebar}>
				†oggle
			</Button>

			<div className={cls.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	);
};

interface Props {
	className?: string;
}
