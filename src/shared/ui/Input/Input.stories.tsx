import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";

import { Input } from "./Input";

export default {
	title: "shared/Input",
	component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
	const [value, setValue] = useState("");

	return <Input value={value} onChange={setValue} {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
	placeholder: "Hello world",
	label: "Hello world",
};
