import { ChangeEvent, InputHTMLAttributes, memo } from "react";

import { classNames } from "shared/lib/classNames";

import cls from "./Input.module.scss";

export const Input = memo((props: Props) => {
	const { className, theme = InputTheme.PRIMARY, onChange, value, label, ...otherProps } = props;

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		if (onChange) {
			onChange(value);
		}
	};

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			{label && <p className={cls.label}>{label}</p>}

			<input className={cls.input} value={value} onChange={handleChange} {...otherProps} />
		</div>
	);
});

interface Props extends HTMLInputProps {
	className?: string;
	theme?: InputTheme;
	value?: string | number;
	onChange?: (value: string) => void;
	label?: string;
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

export enum InputTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	TEXT = "text",
	ICON = "icon",
}
