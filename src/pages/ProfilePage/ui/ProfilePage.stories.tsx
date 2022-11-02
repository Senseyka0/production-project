import { ComponentStory, ComponentMeta } from "@storybook/react";

import { StoreDecorator } from "shared/config/storybook";

import { ProfilePage } from "./ProfilePage";

export default {
	title: "pages/ProfilePage",
	component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
Standard.decorators = [
	StoreDecorator({
		profile: {},
	}),
];
