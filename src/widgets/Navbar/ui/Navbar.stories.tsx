import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook";

import { Navbar } from "./Navbar";

export default {
	title: "widgets/Navbar",
	component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
Standard.decorators = [
	StoreDecorator({
		login: { username: "Hello world", password: "1234" },
	}),
];
