import { ComponentStory, ComponentMeta } from "@storybook/react";

import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";
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
		profile: {
			form: {
				username: "Senseyka",
				age: 21,
				avatar: "https://cdn.kapwing.com/collections/video_image-x1Jgy3nJKT.jpeg",
				city: City.Chernivtsi,
				country: Country.Ukraine,
				currency: Currency.UAH,
				firstName: "Mikhail",
				lastName: "Rypta",
			},
		},
	}),
];
