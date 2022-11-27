import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { CountrySelect } from "./CountrySelect";
import { Country } from "../../model/types/country";

export default {
	title: "entities/CountrySelect",
	component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => {
	const [value, setValue] = useState<string>();

	return <CountrySelect {...args} value={value as Country} onChange={setValue} />;
};

export const Standard = Template.bind({});
Standard.args = {
	label: "Select country",
	placeholder: "Select country",
};
