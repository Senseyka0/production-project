import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

// import cls from "./AboutPage.module.scss";

export const AboutPage = memo(({ className }: Props) => {
	const { t } = useTranslation("about");

	return <div className={classNames("cls.wrapper", {}, [className])}>AboutPage</div>;
});

interface Props {
	className?: string;
}
