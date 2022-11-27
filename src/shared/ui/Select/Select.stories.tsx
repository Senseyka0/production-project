import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { Select } from "./Select";

export default {
	title: "shared/Select",
	component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
	const [value, setValue] = useState<string>();

	return <Select {...args} value={value} onChange={(value: string) => setValue(value)} />;
};

export const Standard = Template.bind({});
Standard.args = {
	label: "Enter value",
	options: [
		{ label: "Hello world", value: "Hello world" },
		{ label: "Hello world", value: "Hello world" },
		{ label: "Hello world", value: "Hello world" },
	],
};
