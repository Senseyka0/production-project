import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Routes } from "app/providers/router";
import { Arrow, Error } from "shared/assets/icons";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";

import cls from "./PageError.module.scss";

export const PageError = ({ className }: Props) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const goHomePage = () => {
		navigate(Routes.HOME);
	};

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<Error width={200} />

			<p>{t("Something wrong 😕")}</p>

			<Button
				onClick={goHomePage}
				theme={ButtonTheme.PRIMARY}
				leftIcon={<Arrow className={cls["button-icon"]} fill="var(--primary-color)" />}
			>
				{t("Return to Home page")}
			</Button>
		</div>
	);
};

interface Props {
	className?: string;
}
