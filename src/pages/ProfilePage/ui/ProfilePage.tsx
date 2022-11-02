import { memo } from "react";
import { useTranslation } from "react-i18next";

import { profileReducer } from "entities/profile";
import { classNames } from "shared/lib/classNames";
import { ReducersList, useDynamicModuleLoad } from "shared/lib/hooks/useDynamicModuleLoad";

// import cls from "./ProfilePage.module.scss";

const reducers: ReducersList = {
	profile: profileReducer,
};

export const ProfilePage = memo(({ className }: Props) => {
	const { t } = useTranslation("profile");

	useDynamicModuleLoad({ reducers, removeAfterUnmount: true });

	return <div className={classNames("cls.wrapper", {}, [className])}>{t("ProfilePage")}</div>;
});

interface Props {
	className?: string;
}
