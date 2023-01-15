import { IComment } from "entities/comment";
import { classNames } from "shared/lib/classNames";
import { Avatar } from "shared/ui/Avatar";

import cls from "./CommentItem.module.scss";
import { Skeleton } from "shared/ui/Skeleton";

export const CommentItem = ({ className, isLoading, text, user }: Props & IComment) => {
	if (isLoading) {
		return (
			<div className={classNames(cls.wrapper, {}, [className])}>
				<div className={cls.header}>
					<Skeleton width={30} height={30} borderRadius="50px" />

					<Skeleton height={16} width={100} />
				</div>

				<Skeleton className={cls.text} width="100%" height={50} />
			</div>
		);
	}

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<div className={cls.header}>
				{user.avatar && <Avatar src={user.avatar} size={30} />}

				<div>{user.username}</div>
			</div>

			<div className={cls.text}>{text}</div>
		</div>
	);
};

interface Props {
	className?: string;
	isLoading?: boolean;
}
