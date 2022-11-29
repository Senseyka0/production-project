import { ComponentStory, ComponentMeta } from "@storybook/react";
import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

import { ProfileCard } from "./ProfileCard";

export default {
	title: "entities/ProfileCard",
	component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => {
	return <ProfileCard {...args} />;
};

export const Standard = Template.bind({});
Standard.args = {
	data: {
		username: "Senseyka",
		age: 21,
		avatar: "https://cdn.kapwing.com/collections/video_image-x1Jgy3nJKT.jpeg",
		city: City.Chernivtsi,
		country: Country.Ukraine,
		currency: Currency.UAH,
		firstName: "Mikhail",
		lastName: "Rypta",
	},
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};

export const Error = Template.bind({});
Error.args = {
	error: "hello",
};

export const Readonly = Template.bind({});
Readonly.args = {
	isReadonly: true,
};
