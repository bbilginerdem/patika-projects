import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo Tests", () => {
	let button, input;

	beforeEach(() => {
		render(<Todo />);

		button = screen.getByText("Add");
		input = screen.getByLabelText("Text");
	});

	test("should render the component", () => {
		const items = screen.getAllByText(/Item/i);

		expect(items.length).toEqual(4);
	});

	test("should have button and input", () => {
		expect(button).toBeInTheDocument();
		expect(input).toBeInTheDocument();
  });
  
  test("should be added to the list after clicking button", () => {
    // fill the input
    const name = "Bilgin";
    userEvent.type(input, name);
    
    // click the button
    userEvent.click(button);

    //assert the button
    expect(screen.getByText("Bilgin")).toBeInTheDocument();

  })
});
