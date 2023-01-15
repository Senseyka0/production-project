import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Error } from "shared/assets/icons";

import { Icon } from "./Icon";

export default {
	title: "shared/Icon",
	component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	Svg: Error,
};
