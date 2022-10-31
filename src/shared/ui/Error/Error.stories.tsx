import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Error } from "./Error";

export default {
	title: "shared/Error",
	component: Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const Standard = Template.bind({});
Standard.args = {
	children: "Hello world",
};
