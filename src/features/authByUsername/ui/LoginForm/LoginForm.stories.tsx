import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook";

import { LoginForm } from "./LoginForm";

export default {
	title: "features/LoginForm",
	component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => {
	return <LoginForm {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {};
Standard.decorators = [
	StoreDecorator({
		login: { username: "Misha Rypta", password: "1234" },
	}),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
	StoreDecorator({
		login: { username: "Misha Rypta", password: "1234", isLoading: true },
	}),
];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
	StoreDecorator({
		login: { username: "Misha Rypta", password: "1234", error: "Failed Auth" },
	}),
];
