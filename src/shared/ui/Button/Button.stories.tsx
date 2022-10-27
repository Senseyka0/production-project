import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonTheme } from ".";

import { Button } from "./Button";

export default {
	title: "shared/Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Hello world",
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: "Hello world",
	theme: ButtonTheme.SECONDARY,
};

export const Text = Template.bind({});
Text.args = {
	children: "Hello world",
	theme: ButtonTheme.TEXT,
};

export const Icon = Template.bind({});
Icon.args = {
	children: "Hello world",
	theme: ButtonTheme.ICON,
};
