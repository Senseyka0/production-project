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
} from "entities/profile";
import { Currency } from "entities/currency";
import { Country } from "entities/country";
import { classNames } from "shared/lib/classNames";
import { ReducersList, useDynamicModuleLoad } from "shared/lib/hooks/useDynamicModuleLoad";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

import { Header } from "./Header/Header";
import { City } from "entities/city";

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

	useDynamicModuleLoad({ reducers, removeAfterUnmount: true });

	useEffect(() => {
		dispatch(fetchProfileData());
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
