import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "app/providers/store";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Error } from "shared/ui/Error";

import { getLoginState } from "../../model/selectors/getLoginState";
import { loginActions } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";

import cls from "./LoginForm.module.scss";

export const LoginForm = memo(({ className }: Props) => {
	const { t } = useTranslation();

	const dispatch = useDispatch<AppDispatch>();
	const { username, password, isLoading, error } = useSelector(getLoginState);

	const onChangeUsername = useCallback(
		(login: string) => {
			dispatch(loginActions.setUsername(login));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(password: string) => {
			dispatch(loginActions.setPassword(password));
		},
		[dispatch]
	);

	const onLogin = useCallback(async () => {
		await dispatch(loginByUsername({ username, password }));
	}, [dispatch, password, username]);

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			{error && <Error>{error}</Error>}

			<Input
				type="text"
				value={username}
				onChange={onChangeUsername}
				className={cls.input}
				label={t("Username")}
				placeholder={t("Username")}
			/>

			<Input
				type="text"
				value={password}
				onChange={onChangePassword}
				className={cls.input}
				label={t("Password")}
				placeholder={t("Password")}
			/>

			<Button onClick={onLogin} className={cls.button} disabled={isLoading}>
				{t("Log In")}
			</Button>
		</div>
	);
});

interface Props {
	className?: string;
}
