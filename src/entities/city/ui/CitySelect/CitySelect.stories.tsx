import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { City } from "../../model/types/city";
import { CitySelect } from "./CitySelect";

export default {
	title: "entities/CitySelect",
	component: CitySelect,
} as ComponentMeta<typeof CitySelect>;

const Template: ComponentStory<typeof CitySelect> = (args) => {
	const [value, setValue] = useState<string>();

	return <CitySelect {...args} value={value as City} onChange={setValue} />;
};

export const Standard = Template.bind({});
Standard.args = {
	label: "Select city",
	placeholder: "Select city",
};
