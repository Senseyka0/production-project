import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook";

import { Sidebar } from "./Sidebar";

export default {
	title: "widgets/Sidebar",
	component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Standard = Template.bind({});
Standard.args = {};

export const Auth = Template.bind({});
Auth.args = {};
Auth.decorators = [
	StoreDecorator({
		user: { isAuth: true, authData: { id: "1", username: "senseyka" } },
	}),
];

export const NotAuth = Template.bind({});
NotAuth.args = {};
NotAuth.decorators = [
	StoreDecorator({
		user: { isAuth: false },
	}),
];
