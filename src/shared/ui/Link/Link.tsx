import { memo, ReactNode } from "react";
import { NavLink, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames";

import cls from "./Link.module.scss";

export const Link = memo((props: Props) => {
	const { className, children, theme = LinkTheme.PRIMARY, ...otherProps } = props;

	return (
		<NavLink
			className={({ isActive }) =>
				classNames(cls.wrapper, { [cls.active]: isActive }, [className, cls[theme]])
			}
			{...otherProps}
		>
			{children}
		</NavLink>
	);
});

interface Props extends LinkProps {
	className?: string;
	children: ReactNode;
	theme?: LinkTheme;
}

export enum LinkTheme {
	PRIMARY = "primary",
}
