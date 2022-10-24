import { useTranslation } from "react-i18next";

import { Language } from "shared/assets/icons";
import { classNames } from "shared/libs/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";

// import cls from "./LanguageSwitcher.module.scss";

export const LanguageSwitcher = ({ className }: Props) => {
	const { i18n } = useTranslation();

	const toggleLanguage = async () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Button
			className={classNames("cls.wrapper", {}, [className])}
			onClick={toggleLanguage}
			theme={ButtonTheme.ICON}>
			<Language width={30} fill="var(--primary-color)" />
		</Button>
	);
};

interface Props {
	className?: string;
}
