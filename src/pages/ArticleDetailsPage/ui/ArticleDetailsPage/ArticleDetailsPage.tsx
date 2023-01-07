import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

import cls from "./ArticleDetailsPage.module.scss";

const ArticleDetailsPage = ({ className }: Props) => {
	const { t } = useTranslation("article");

	return <div className={classNames(cls.wrapper, {}, [className])}>ArticleDetails</div>;
};

interface Props {
	className?: string;
}

export default memo(ArticleDetailsPage);
