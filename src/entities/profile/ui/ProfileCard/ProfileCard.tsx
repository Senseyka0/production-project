import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input";

import { getProfileData, getProfileError, getProfileIsLoading } from "../../model/selectors";

import cls from "./ProfileCard.module.scss";

export const ProfileCard = ({ className }: Props) => {
	const { t } = useTranslation("profile");

	const data = useSelector(getProfileData);
	const error = useSelector(getProfileError);
	const isLoading = useSelector(getProfileIsLoading);

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<div className={cls.header}>
				<h3>{t("Profile")}</h3>

				<Button theme={ButtonTheme.SECONDARY} className={cls.edit}>
					{t("Edit")}
				</Button>
			</div>
			<div className={cls.content}>
				<Input value={data?.firstName} placeholder={t("Your first name")} className={cls.input} />
				<Input value={data?.lastLame} placeholder={t("Your last name")} className={cls.input} />
			</div>
		</div>
	);
};

interface Props {
	className?: string;
}
