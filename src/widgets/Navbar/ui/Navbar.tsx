import { useTranslation } from "react-i18next";

import { Routes } from "app/providers/router/lib/route";
import { classNames } from "shared/lib/classNames";
import { Link } from "shared/ui/Link";

import cls from "./Navbar.module.scss";

export const Navbar = ({ className }: Props) => {
	const { t } = useTranslation();

	return <div className={classNames(cls.wrapper, {}, [className])}></div>;
};

interface Props {
	className?: string;
}
