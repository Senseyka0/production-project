import ReactSelect from "react-select";

import { classNames } from "shared/lib/classNames";

import cls from "./Select.module.scss";

export const Select = (props: Props) => {
	const {
		className,
		label,
		isLoading = false,
		placeholder,
		isReadonly = false,
		onChange,
		options,
		value,
	} = props;

	const handleChange = (option: Option) => {
		onChange(option.value);
	};

	const optionValue = { label: value, value };

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			{label && <p className={cls.label}>{label}</p>}

			<ReactSelect
				value={optionValue}
				placeholder={placeholder}
				isLoading={isLoading}
				isDisabled={isReadonly}
				options={options}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				onChange={handleChange}
			/>
		</div>
	);
};

interface Props {
	className?: string;
	label?: string;
	isLoading?: boolean;
	placeholder?: string;
	onChange: (newValue: string) => void;
	options: Option[];
	value?: string;
	isReadonly?: boolean;
}

type Option = { label: string; value: string };
