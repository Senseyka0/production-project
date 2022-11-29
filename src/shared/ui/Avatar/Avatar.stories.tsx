import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from "shared/assets/tests/storybook.jpeg";

import { Avatar } from "./Avatar";

export default {
	title: "shared/Avatar",
	component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	size: 150,
	src: Image,
};

export const Small = Template.bind({});
Small.args = {
	size: 50,
	src: Image,
};

export const Big = Template.bind({});
Big.args = {
	size: 200,
	src: Image,
};
