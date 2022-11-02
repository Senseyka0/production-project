import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

// import cls from "./HomePage.module.scss";

export const HomePage = memo(({ className }: Props) => {
	const { t } = useTranslation();

	return <div className={classNames("cls.wrapper", {}, [className])}>HomePage</div>;
});

interface Props {
	className?: string;
}
