import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Form", () => {
  it("render the correct number of inputs", () => {
    // Arrange
    const fields = ["email", "password"];
    render(<Form fields={fields} />);

    const inputs = screen.getAllByRole("");
  });
});
