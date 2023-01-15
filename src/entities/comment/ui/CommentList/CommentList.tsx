import { IComment } from "entities/comment";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { CommentItem } from "../CommentItem/CommentItem";

import cls from "./CommentList.module.scss";

export const CommentList = ({ className, comments, isLoading }: Props) => {
	const { t } = useTranslation();

	if (!comments?.length) {
		<div className={classNames(cls.wrapper, {}, [className])}>
			<div>{t("noComments")}</div>
		</div>;
	}

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			{comments?.map((comment) => (
				<CommentItem className={cls.comment} key={comment.id} isLoading={isLoading} {...comment} />
			))}
		</div>
	);
};

interface Props {
	className?: string;
	comments?: IComment[];
	isLoading?: boolean;
}
