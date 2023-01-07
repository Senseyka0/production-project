import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

import cls from "./ArticlesPage.module.scss";

const ArticlesPage = ({ className }: Props) => {
	const { t } = useTranslation("articles");

	return <div className={classNames(cls.wrapper, {}, [className])}>Articles</div>;
};

interface Props {
	className?: string;
}

export default memo(ArticlesPage);
