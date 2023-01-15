import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import { ArticleDetails } from "entities/article";
import { classNames } from "shared/lib/classNames";

import cls from "./ArticleDetailsPage.module.scss";

const ArticleDetailsPage = ({ className }: Props) => {
	const { t } = useTranslation("article");
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return (
			<div className={classNames(cls.wrapper, {}, [className])}>{t("Article is not found")}</div>
		);
	}

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<ArticleDetails id={id} />
		</div>
	);
};

interface Props {
	className?: string;
}

export default memo(ArticleDetailsPage);
