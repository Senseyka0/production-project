import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/classNames";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Modal } from "shared/ui/Modal";

import cls from "./Navbar.module.scss";

export const Navbar = ({ className }: Props) => {
	const { t } = useTranslation();

	const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

	const onOpenAuthModal = useCallback(() => {
		setIsOpenAuthModal(true);
	}, []);

	const onCloseAuthModal = useCallback(() => {
		setIsOpenAuthModal(false);
	}, []);

	return (
		<div className={classNames(cls.wrapper, {}, [className])}>
			<div className={cls.links}>
				<Button theme={ButtonTheme.TEXT} className={cls.links} onClick={onOpenAuthModal}>
					{t("Log In")}
				</Button>
			</div>

			<Modal isOpen={isOpenAuthModal} onClose={onCloseAuthModal}>
				hh
			</Modal>
		</div>
	);
};

interface Props {
	className?: string;
}
