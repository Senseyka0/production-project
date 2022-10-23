import { classNames } from "shared/libs/classNames";

import cls from "./Loader.module.scss";

export const Loader = ({ className }: Props) => {
	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

interface Props {
	className?: string;
}
