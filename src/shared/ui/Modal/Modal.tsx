import { lazy, MouseEvent, ReactNode, useCallback, useEffect, useRef, useState } from "react";

import { classNames } from "shared/lib/classNames";
import { Portal } from "shared/ui/Portal";

import cls from "./Modal.module.scss";

const ANIMATION_DELAY = 300;

export const Modal = ({ className, children, isOpen, onClose, isLazy = false }: Props) => {
	const [isClosing, setIsClosing] = useState(false);
	const [isMounted, setIsMounted] = useState(false);

	const timerRef = useRef<ReturnType<typeof setTimeout>>();

	const onCloseModal = useCallback(() => {
		setIsClosing(true);

		timerRef.current = setTimeout(() => {
			onClose();

			setIsClosing(false);
		}, ANIMATION_DELAY);
	}, [onClose]);

	const onClickContent = (e: MouseEvent<HTMLDivElement>) => {
		e.stopPropagation();
	};

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Escape") {
				onCloseModal();
			}
		},
		[onCloseModal]
	);

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("keydown", onKeyDown);
		}

		return () => {
			clearTimeout(timerRef.current);
		};
	}, [isOpen, onKeyDown]);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div
				className={classNames(cls.wrapper, { [cls.opened]: isOpen, [cls.closing]: isClosing }, [
					className,
				])}
				onClick={onCloseModal}
			>
				<div className={cls.overlay}>
					<div className={cls.content} onClick={onClickContent}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
	);
};

interface Props {
	className?: string;
	children: ReactNode;
	isOpen: boolean;
	onClose: () => void;
	isLazy?: boolean;
}
