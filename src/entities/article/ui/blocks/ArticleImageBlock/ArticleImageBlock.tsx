import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

import { ArticleImageBlock as IImageBlock } from "../../../model/types/article";

import cls from "./ArticleImageBlock.module.scss";

export const ArticleImageBlock = memo(
	({ className, id, src, title, type }: Props & IImageBlock) => {
		const { t } = useTranslation();

		return (
			<div className={classNames(cls.wrapper, {}, [className])}>
				<img src={src} alt={title} className={cls.image} />

				{title && <div className={cls.title}>{title}</div>}
			</div>
		);
	}
);

interface Props {
	className?: string;
}
