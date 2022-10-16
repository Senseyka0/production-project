import { ReactNode } from "react";
import { Link as RouterLink, LinkProps } from "react-router-dom";

import { classNames } from "shared/libs/classNames";

import cls from "./Link.module.scss";

export const Link = ({ className, children, ...otherProps }: Props) => {
	return (
		<RouterLink className={classNames(cls.wrapper, {}, [className])} {...otherProps}>
			{children}
		</RouterLink>
	);
};

interface Props extends LinkProps {
	className?: string;
	children: ReactNode;
}
