import { memo, useEffect } from "react";
import { useSelector } from "react-redux";

import { getArticleData, getArticleError, getArticleIsLoading } from "entities/article";
import { classNames } from "shared/lib/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { ReducersList, useDynamicModuleLoad } from "shared/lib/hooks/useDynamicModuleLoad";
import { Error } from "shared/ui/Error";
import { Skeleton } from "shared/ui/Skeleton";
import { Avatar } from "shared/ui/Avatar";

import { articleDetailsReducer } from "../../model/slices/ArticleDetailsSlice";
import { getArticleById } from "../../model/services/getArticleById";
import { ArticleBlock, BlockType } from "../../model/types/article";
import { ArticleTextBlock, ArticleCodeBlock, ArticleImageBlock } from "../blocks";

import cls from "./ArticleDetails.module.scss";

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

const renderBlock = (block: ArticleBlock) => {
	switch (block.type) {
		case BlockType.TEXT:
			return <ArticleTextBlock key={block.id} {...block} />;

		case BlockType.CODE:
			return <ArticleCodeBlock key={block.id} {...block} />;

		case BlockType.IMAGE:
			return <ArticleImageBlock key={block.id} {...block} />;

		default:
			return null;
	}
};

export const ArticleDetails = memo(({ className, id }: Props) => {
	const dispatch = useAppDispatch();

	useDynamicModuleLoad({ reducers, removeAfterUnmount: true });

	const isLoading = useSelector(getArticleIsLoading);
	const error = useSelector(getArticleError);
	const articleData = useSelector(getArticleData);

	useEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(getArticleById(id));
		}
	}, [dispatch, id]);

	if (isLoading) {
		return (
			<>
				<Skeleton width={200} height={200} borderRadius="50%" className={cls.avatar} />

				<Skeleton width={300} height={32} className={cls.skeleton} />

				<Skeleton width={600} height={24} className={cls.skeleton} />

				<Skeleton width="100%" height={200} className={cls.skeleton} />

				<Skeleton width="100%" height={200} className={cls.skeleton} />
			</>
		);
	}

	if (error) {
		return (
			<div className={classNames(cls["error-wrapper"], {}, [className])}>
				<Error>{error}</Error>
			</div>
		);
	}

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<div className={cls["avatar-wrapper"]}>
				<Avatar size={200} src={articleData?.img} className={cls.avatar} />
			</div>

			<div className={cls.title}>{articleData?.title}</div>

			<div className={cls.subtitle}>{articleData?.subtitle}</div>

			<div className={cls.views}>Views: {articleData?.views}</div>

			<div className={cls.date}>Created at: {articleData?.createdAt}</div>

			{articleData?.blocks.map(renderBlock)}
		</div>
	);
});

interface Props {
	className?: string;
	id: string;
}
