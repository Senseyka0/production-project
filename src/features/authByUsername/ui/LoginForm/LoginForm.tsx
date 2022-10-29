import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";

import cls from "./LoginForm.module.scss";

export const LoginForm = ({ className }: Props) => {
	const { t } = useTranslation();

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<Input
				type="text"
				value=""
				onChange={() => console.log}
				className={cls.input}
				label={t("Username")}
				placeholder={t("Username")}
			/>
			<Input
				type="text"
				value=""
				onChange={() => console.log}
				className={cls.input}
				label={t("Password")}
				placeholder={t("Password")}
			/>

			<Button className={cls.button}>{t("Log In")}</Button>
		</div>
	);
};

interface Props {
	className?: string;
}
