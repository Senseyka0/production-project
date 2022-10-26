import { fireEvent, screen } from "@testing-library/react";

import { renderWithTranslation } from "shared/lib/tests";

import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
	test("is Sidebar in document", () => {
		renderWithTranslation(<Sidebar />);

		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});

	test("test toggle", () => {
		renderWithTranslation(<Sidebar />);

		const toggleButton = screen.getByTestId("sidebar-toggle");

		expect(toggleButton).toBeInTheDocument();

		fireEvent.click(toggleButton);

		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
	});
});
