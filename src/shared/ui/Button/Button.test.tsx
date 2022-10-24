import { render, screen } from "@testing-library/react";

import { Button, ButtonTheme } from ".";

describe("Button", () => {
	test("is button in document", () => {
		render(<Button>hello</Button>);
		expect(screen.getByText("hello")).toBeInTheDocument();
	});

	test("with only first param", () => {
		render(<Button theme={ButtonTheme.PRIMARY}>Hello</Button>);
		expect(screen.getByText("Hello")).toHaveClass("primary");
	});
});
