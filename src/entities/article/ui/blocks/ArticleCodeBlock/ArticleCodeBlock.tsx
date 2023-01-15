import { memo } from "react";

import { classNames } from "shared/lib/classNames";
import { Code } from "shared/ui/Code";

import { ArticleCodeBlock as ICodeBlock } from "../../../model/types/article";

import cls from "./ArticleCodeBlock.module.scss";

export const ArticleCodeBlock = memo(({ className, code }: Props & ICodeBlock) => {
	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<Code text={code} />
		</div>
	);
});

interface Props {
	className?: string;
}
