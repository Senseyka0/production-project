import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AboutPage } from "./AboutPage";

export default {
	title: "pages/AboutPage",
	component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

export const Standard = Template.bind({});
Standard.args = {};
