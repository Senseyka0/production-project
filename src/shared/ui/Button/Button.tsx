import { ButtonHTMLAttributes, memo, ReactNode } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Button.module.scss";

export const Button = memo((props: Props) => {
	const {
		className,
		children,
		theme = ButtonTheme.PRIMARY,
		leftIcon,
		rightIcon,
		...otherProps
	} = props;

	return (
		<button className={classNames(cls.wrapper, {}, [className, cls[theme]])} {...otherProps}>
			{leftIcon && <span className={cls["button-icon"]}>{leftIcon}</span>}

			{children}

			{rightIcon && <span className={cls["button-icon"]}>{rightIcon}</span>}
		</button>
	);
});

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ButtonTheme;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}

export enum ButtonTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	TEXT = "text",
	ICON = "icon",
	ERROR = "error",
}
