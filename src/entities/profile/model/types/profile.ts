import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

export interface ProfileSchema {
	data?: IProfile;
	form?: IProfile;
	isLoading: boolean;
	error?: string;
	isReadonly?: boolean;
}

export interface IProfile {
	firstName?: string;
	lastName?: string;
	age?: number;
	currency?: Currency;
	country?: Country;
	city?: City;
	username?: string;
	avatar?: string;
}
