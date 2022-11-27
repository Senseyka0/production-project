import { CSSProperties, ImgHTMLAttributes, memo, useMemo } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Avatar.module.scss";

export const Avatar = memo((props: Props) => {
	const { className, size = 100, ...otherProps } = props;

	const styles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [size]);

	return (
		<img className={classNames(cls.wrapper, {}, [className])} style={styles} {...otherProps} />
	);
});

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	className?: string;
	size?: number;
	src: string;
}
