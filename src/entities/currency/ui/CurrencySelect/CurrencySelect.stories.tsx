import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { Currency } from "entities/currency";

import { CurrencySelect } from "./CurrencySelect";

export default {
	title: "entities/CurrencySelect",
	component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => {
	const [value, setValue] = useState<string>();

	return <CurrencySelect {...args} value={value as Currency} onChange={setValue} />;
};

export const Standard = Template.bind({});
Standard.args = {
	label: "Select currency",
	placeholder: "Select currency",
};
