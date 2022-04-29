import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Todo from "./index";

describe("Todo Tests", () => {
	let button, input;

  beforeEach(() => {
    render(<Todo />);

    button = screen.getByText("Add")
    input = screen.getByText("Add")
  });
});
