import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { getUserAuthData, getUserIsAuth, userActions } from "entities/user";
import { LoginModal } from "features/authByUsername";
import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Logout } from "shared/assets/icons";

import cls from "./Navbar.module.scss";

export const Navbar = memo(({ className }: Props) => {
	const { t } = useTranslation();
	const dispatch = useDispatch();

	const isAuth = useSelector(getUserIsAuth);
	const authData = useSelector(getUserAuthData);

	const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

	const onOpenAuthModal = useCallback(() => {
		setIsOpenAuthModal(true);
	}, []);

	const onCloseAuthModal = useCallback(() => {
		setIsOpenAuthModal(false);
	}, []);

	const onLogout = () => {
		dispatch(userActions.logOut());
	};

	if (isAuth) {
		return (
			<div className={classNames(cls.wrapper, {}, [className])}>
				<div className={cls.links}>
					<p>{authData.username}</p>

					<Button theme={ButtonTheme.ICON} onClick={onLogout}>
						<Logout fill="var(--primary-color)" width={20} />
					</Button>
				</div>
			</div>
		);
	} else {
		return (
			<div className={classNames(cls.wrapper, {}, [className])}>
				<div className={cls.links}>
					<Button theme={ButtonTheme.TEXT} onClick={onOpenAuthModal}>
						{t("Log In")}
					</Button>
				</div>

				{isOpenAuthModal && <LoginModal isOpen={isOpenAuthModal} onClose={onCloseAuthModal} />}
			</div>
		);
	}
});

interface Props {
	className?: string;
}
