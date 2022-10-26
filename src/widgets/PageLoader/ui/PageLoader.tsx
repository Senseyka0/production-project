import { classNames } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader";

import cls from "./PageLoader.module.scss";

export const PageLoader = ({ className }: Props) => {
	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<Loader />
		</div>
	);
};

interface Props {
	className?: string;
}
