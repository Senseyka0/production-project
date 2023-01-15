import { memo } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Icon.module.scss";

export const Icon = memo(({ className, Svg }: Props) => {
	return <Svg className={classNames(cls.wrapper, {}, [className])}>Icon</Svg>;
});

interface Props {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}
