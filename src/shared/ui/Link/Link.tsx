import { ReactNode } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

import { classNames } from "shared/lib/classNames";

import cls from "./Link.module.scss";

export const Link = ({ className, children, theme = LinkTheme.PRIMARY, ...otherProps }: Props) => {
	return (
		<RouterLink className={classNames(cls.wrapper, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</RouterLink>
	);
};

interface Props extends LinkProps {
	className?: string;
	children: ReactNode;
	theme?: LinkTheme;
}

export enum LinkTheme {
	PRIMARY = "primary",
}
