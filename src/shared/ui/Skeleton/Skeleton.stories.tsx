import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Skeleton } from "./Skeleton";

export default {
	title: "shared/Skeleton",
	component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => {
	return <Skeleton {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
	width: "100%",
	height: 200,
};

export const Circle = Template.bind({});
Circle.args = {
	borderRadius: "50%",
	width: 100,
	height: 100,
};
