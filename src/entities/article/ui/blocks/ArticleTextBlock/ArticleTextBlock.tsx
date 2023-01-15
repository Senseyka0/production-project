import { memo } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";

import { ArticleTextBlock as ITextBlock } from "../../../model/types/article";

import cls from "./ArticleTextBlock.module.scss";

export const ArticleTextBlock = memo(({ className, paragraphs, title }: Props & ITextBlock) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			{title && <div className={cls.title}>{title}</div>}

			{
				<div className={cls["paragraph-wrapper"]}>
					{paragraphs.map((paragraph, index) => (
						<div className={cls.paragraph} key={index}>
							{paragraph}
						</div>
					))}
				</div>
			}
		</div>
	);
});

interface Props {
	className?: string;
}
