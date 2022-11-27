import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";
import Image from "./storybook.jpeg";

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
