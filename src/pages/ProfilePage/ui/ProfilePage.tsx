import { memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
	fetchProfileData,
	ProfileCard,
	profileReducer,
	getProfileError,
	getProfileIsLoading,
	getProfileIsReadonly,
	profileActions,
	getProfileForm,
	getProfileValidateErrors,
	ValidateProfileError,
} from "entities/profile";
import { Currency } from "entities/currency";
import { Country } from "entities/country";
import { City } from "entities/city";
import { classNames } from "shared/lib/classNames";
import { ReducersList, useDynamicModuleLoad } from "shared/lib/hooks/useDynamicModuleLoad";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Error } from "shared/ui/Error";

import { Header } from "./Header/Header";

// import cls from "./ProfilePage.module.scss";

const reducers: ReducersList = {
	profile: profileReducer,
};

export const ProfilePage = memo(({ className }: Props) => {
	const { t } = useTranslation("profile");
	const dispatch = useAppDispatch();

	const formData = useSelector(getProfileForm);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);
	const isReadonly = useSelector(getProfileIsReadonly);
	const validateErrors = useSelector(getProfileValidateErrors) || [];

	useDynamicModuleLoad({ reducers, removeAfterUnmount: true });

	const validateErrorTranslates: Record<ValidateProfileError, string> = {
		[ValidateProfileError.INCORRECT_AGE]: t("Server error on save data"),
		[ValidateProfileError.INCORRECT_COUNTRY]: t("Incorrect country"),
		[ValidateProfileError.INCORRECT_USER_DATA]: t("FirstName and LastName is required"),
		[ValidateProfileError.NO_DATA]: t("No data"),
		[ValidateProfileError.SERVER_ERROR]: t("Incorrect age"),
	};

	useEffect(() => {
		if (__PROJECT__ !== "storybook") {
			dispatch(fetchProfileData());
		}
	}, [dispatch]);

	const onChangeFirstName = useCallback(
		(firstName?: string) => {
			dispatch(profileActions.updateProfileData({ firstName }));
		},
		[dispatch]
	);

	const onChangeLastName = useCallback(
		(lastName?: string) => {
			dispatch(profileActions.updateProfileData({ lastName }));
		},
		[dispatch]
	);

	const onChangeAge = useCallback(
		(age?: string) => {
			dispatch(profileActions.updateProfileData({ age: Number(age) }));
		},
		[dispatch]
	);

	const onChangeCountry = useCallback(
		(country?: Country) => {
			dispatch(profileActions.updateProfileData({ country }));
		},
		[dispatch]
	);

	const onChangeCity = useCallback(
		(city?: City) => {
			dispatch(profileActions.updateProfileData({ city }));
		},
		[dispatch]
	);

	const onChangeCurrency = useCallback(
		(currency?: Currency) => {
			dispatch(profileActions.updateProfileData({ currency }));
		},
		[dispatch]
	);

	const onChangeUsername = useCallback(
		(username?: string) => {
			dispatch(profileActions.updateProfileData({ username }));
		},
		[dispatch]
	);

	return (
		<div className={classNames("cls.wrapper", {}, [className])}>
			<Header />

			{validateErrors.length
				? validateErrors.map((error) => <Error key={error}>{validateErrorTranslates[error]}</Error>)
				: null}

			<ProfileCard
				data={formData}
				isLoading={isLoading}
				isReadonly={isReadonly}
				error={error}
				onChangeFirstName={onChangeFirstName}
				onChangeLastName={onChangeLastName}
				onChangeAge={onChangeAge}
				onChangeCity={onChangeCity}
				onChangeCountry={onChangeCountry}
				onChangeUsername={onChangeUsername}
				onChangeCurrency={onChangeCurrency}
			/>
		</div>
	);
});

interface Props {
	className?: string;
}
