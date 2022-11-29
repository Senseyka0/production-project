import { City } from "entities/city";
import { Country } from "entities/country";
import { Currency } from "entities/currency";

export interface ProfileSchema {
	data?: IProfile;
	form?: IProfile;
	isLoading: boolean;
	error?: string;
	isReadonly?: boolean;
	validateErrors?: ValidateProfileError[];
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

export enum ValidateProfileError {
	INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
	INCORRECT_AGE = "INCORRECT_AGE",
	INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
	NO_DATA = "NO_DATA",
	SERVER_ERROR = "SERVER_ERROR",
}
