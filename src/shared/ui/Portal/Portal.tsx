import React from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children, element = document.querySelector("body") }: Props) => {
	return createPortal(<>{children}</>, element);
};

interface Props {
	children: React.ReactNode;
	element?: HTMLElement;
}
