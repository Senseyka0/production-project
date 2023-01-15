import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Code } from "./Code";

export default {
	title: "shared/Code",
	component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	text: "<div>Hello <bold>world</bold></div>",
};
