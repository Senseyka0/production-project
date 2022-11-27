import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { getProfileIsReadonly, profileActions, updateProfileData } from "entities/profile";
import { classNames } from "shared/lib/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui/Button";

import cls from "./Header.module.scss";

export const Header = ({ className }: Props) => {
	const { t } = useTranslation("profile");
	const dispatch = useAppDispatch();

	const isReadonly = useSelector(getProfileIsReadonly);

	const handleCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]);

	const handleEdit = useCallback(() => {
		dispatch(profileActions.setIsReadonly(false));
	}, [dispatch]);

	const handleSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<h3>{t("Profile")}</h3>

			{isReadonly ? (
				<Button theme={ButtonTheme.SECONDARY} onClick={handleEdit}>
					{t("Edit")}
				</Button>
			) : (
				<div className={cls.buttons}>
					<Button theme={ButtonTheme.ERROR} onClick={handleCancelEdit}>
						{t("Cancel")}
					</Button>

					<Button theme={ButtonTheme.PRIMARY} onClick={handleSave}>
						{t("Save")}
					</Button>
				</div>
			)}
		</div>
	);
};

interface Props {
	className?: string;
}
