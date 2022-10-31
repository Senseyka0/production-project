import { ReactNode } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Error.module.scss";

export const Error = ({ className, children, theme = ErrorTheme.PRIMARY }: Props) => {
	return <div className={classNames(cls.wrapper, {}, [className, cls[theme]])}>{children}</div>;
};

interface Props {
	className?: string;
	children: ReactNode;
	theme?: ErrorTheme;
}

export enum ErrorTheme {
	PRIMARY = "primary",
}
