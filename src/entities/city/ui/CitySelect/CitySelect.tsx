import { useTranslation } from "react-i18next";
import { memo, useMemo } from "react";

import { Select } from "shared/ui/Select";
import { City } from "../../model/types/city";

export const CitySelect = memo((props: Props) => {
	const { t } = useTranslation("profile");

	const currencyOptions = useMemo(
		() => Object.entries(City).map(([label, value]) => ({ label, value })),
		[]
	);

	const handleChange = (value: string) => {
		props.onChange(value as City);
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
	onChange: (value: City) => void;
	value?: City;
	isReadonly?: boolean;
	label?: string;
	placeholder?: string;
}
