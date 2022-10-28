import { fireEvent, screen } from "@testing-library/react";

import { RenderTestComponent } from "shared/config/tests";

import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
	test("is Sidebar in document", () => {
		RenderTestComponent(<Sidebar />);

		expect(screen.getByTestId("sidebar")).toBeInTheDocument();
	});

	test("test toggle", () => {
		RenderTestComponent(<Sidebar />);

		const toggleButton = screen.getByTestId("sidebar-toggle");

		expect(toggleButton).toBeInTheDocument();

		fireEvent.click(toggleButton);

		expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
	});
});
