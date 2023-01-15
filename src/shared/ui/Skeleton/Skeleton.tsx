import { CSSProperties } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Skeleton.module.scss";

export const Skeleton = ({ className, borderRadius, height, width }: Props) => {
	const styles: CSSProperties = {
		width,
		height,
		borderRadius,
	};

	return <div style={styles} className={classNames(cls.wrapper, {}, [className])} />;
};

interface Props {
	className?: string;
	height?: string | number;
	width?: string | number;
	borderRadius?: string;
}
