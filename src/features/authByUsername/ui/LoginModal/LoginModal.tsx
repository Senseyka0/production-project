import { Suspense } from "react";

import { classNames } from "shared/lib/classNames";
import { Loader } from "shared/ui/Loader";
import { Modal } from "shared/ui/Modal";

import { LoginFormAsync } from "../LoginForm/LoginForm.async";

import cls from "./LoginModal.module.scss";

export const LoginModal = ({ className, isOpen, onClose }: Props) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			className={classNames(cls.wrapper, {}, [className])}
			isLazy
		>
			<Suspense fallback={<Loader />}>
				<LoginFormAsync />
			</Suspense>
		</Modal>
	);
};

interface Props {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}
