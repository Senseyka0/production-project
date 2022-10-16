import { Routes } from "app/providers/router/lib/route";
import { classNames } from "shared/libs/classNames";
import { Link } from "shared/ui/Link";

import cls from "./Navbar.module.scss";

export const Navbar = ({ className }: Props) => {
	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<Link to={Routes.HOME}>Home</Link>

			<Link to={Routes.ABOUT}>About</Link>
		</div>
	);
};

interface Props {
	className?: string;
}
