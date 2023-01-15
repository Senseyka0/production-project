import { memo, useCallback } from "react";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Icon } from "shared/ui/Icon";
import { AboutUs } from "shared/assets/icons";

import cls from "./Code.module.scss";

export const Code = memo(({ className, text }: Props) => {
	const onCopy = useCallback(() => {
		navigator.clipboard.writeText(text);
	}, [text]);

	return (
		<pre className={classNames(cls.wrapper, {}, [className])}>
			<Button onClick={onCopy} className={cls.copy} theme={ButtonTheme.ICON}>
				<Icon Svg={AboutUs} />
			</Button>

			<code>{text}</code>
		</pre>
	);
});

interface Props {
	className?: string;
	text: string;
}
