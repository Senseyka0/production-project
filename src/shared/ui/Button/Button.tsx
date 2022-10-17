import { ButtonHTMLAttributes, ReactNode } from "react";

import { classNames } from "shared/libs/classNames";

import cls from "./Button.module.scss";

export const Button = ({
	className,
	children,
	theme = ButtonTheme.PRIMARY,
	...otherProps
}: Props) => {
	return (
		<button className={classNames(cls.wrapper, {}, [className, cls[theme]])} {...otherProps}>
			{children}
		</button>
	);
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ButtonTheme;
}

export enum ButtonTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	TEXT = "text",
	ICON = "icon",
}
