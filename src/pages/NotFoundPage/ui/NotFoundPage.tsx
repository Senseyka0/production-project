import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { Arrow, NotFound } from "shared/assets/icons";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Routes } from "app/providers/router";

import cls from "./NotFoundPage.module.scss";

export const NotFoundPage = ({ className }: Props) => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	const goHomePage = () => {
		navigate(Routes.HOME);
	};

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<NotFound width={200} />

			<p>{t("The page is not found")}</p>

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
