import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { ArticleDetails } from "entities/article";
import { CommentList } from "entities/comment";
import { classNames } from "shared/lib/classNames";
import { ReducersList, useDynamicModuleLoad } from "shared/lib/hooks/useDynamicModuleLoad";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";

import {
	articleDetailsCommentsReducer,
	getArticleComments,
} from "../../model/slices/articleDetailsCommentsSlice";
import {
	getArticleDetailsCommentsError,
	getArticleDetailsCommentsIsLoading,
} from "../../model/selectors";

import cls from "./ArticleDetailsPage.module.scss";
import { fetchCommentsByArticleId } from "pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: Props) => {
	const { t } = useTranslation("article");
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();

	useDynamicModuleLoad({
		reducers: reducers,
		removeAfterUnmount: true,
	});

	const comments = useSelector(getArticleComments.selectAll);
	const error = useSelector(getArticleDetailsCommentsError);
	const isLoading = useSelector(getArticleDetailsCommentsIsLoading);

	useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

	if (!id) {
		return (
			<div className={classNames(cls.wrapper, {}, [className])}>{t("Article is not found")}</div>
		);
	}

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<ArticleDetails id={id} />

			<div className={cls["comment-title"]}>{t("comments")}</div>

			<CommentList isLoading={isLoading} comments={comments} />
		</div>
	);
};

interface Props {
	className?: string;
}

export default memo(ArticleDetailsPage);
