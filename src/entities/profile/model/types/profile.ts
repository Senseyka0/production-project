import { Country, Currency } from "shared/constants/common";

export interface ProfileSchema {
	data?: IProfile;
	isLoading: boolean;
	error?: string;
	isReadonly?: boolean;
}

export interface IProfile {
	firstName: string;
	lastLame: string;
	age: number;
	currency: Currency;
	country: Country;
	city: string;
	username: string;
	avatar: string;
}
