import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";

import { Currency } from "../../model/types/currency";
import { Select } from "shared/ui/Select";

export const CurrencySelect = memo((props: Props) => {
	const { t } = useTranslation("profile");

	const currencyOptions = useMemo(
		() => Object.entries(Currency).map(([label, value]) => ({ label, value })),
		[]
	);

	const handleChange = (value: string) => {
		props.onChange(value as Currency);
	};

	return (
		<Select
			{...props}
			options={currencyOptions}
			value={props.value as string}
			onChange={handleChange}
		/>
	);
});

interface Props {
	className?: string;
	onChange: (value: Currency) => void;
	value?: Currency;
	isReadonly?: boolean;
	label?: string;
	placeholder?: string;
}
