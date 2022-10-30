import { classNames } from "shared/lib/classNames";
import { Modal } from "shared/ui/Modal";

import { LoginForm } from "../LoginForm/LoginForm";

import cls from "./LoginModal.module.scss";

export const LoginModal = ({ className, isOpen, onClose }: Props) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			className={classNames(cls.wrapper, {}, [className])}
			isLazy
		>
			<LoginForm />
		</Modal>
	);
};

interface Props {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}
