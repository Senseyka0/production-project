import { memo, useMemo } from "react";

import { Select } from "shared/ui/Select";

import { Country } from "../../model/types/country";

export const CountrySelect = memo((props: Props) => {
	const currencyOptions = useMemo(
		() => Object.entries(Country).map(([label, value]) => ({ label, value })),
		[]
	);

	const handleChange = (value: string) => {
		props.onChange(value as Country);
	};

	return (
		<Select {...props} options={currencyOptions} value={props.value} onChange={handleChange} />
	);
});

interface Props {
	className?: string;
	onChange: (value: Country) => void;
	value?: Country;
	isReadonly?: boolean;
	label?: string;
	placeholder?: string;
}
