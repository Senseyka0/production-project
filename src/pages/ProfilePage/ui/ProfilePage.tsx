import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { fetchProfileData, ProfileCard, profileReducer } from "entities/profile";
import { classNames } from "shared/lib/classNames";
import { ReducersList, useDynamicModuleLoad } from "shared/lib/hooks/useDynamicModuleLoad";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

// import cls from "./ProfilePage.module.scss";

const reducers: ReducersList = {
	profile: profileReducer,
};

export const ProfilePage = memo(({ className }: Props) => {
	const { t } = useTranslation("profile");
	const dispatch = useAppDispatch();

	useDynamicModuleLoad({ reducers, removeAfterUnmount: true });

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<div className={classNames("cls.wrapper", {}, [className])}>
			<ProfileCard />
		</div>
	);
});

interface Props {
	className?: string;
}
