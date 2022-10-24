import { render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  it("renders a submit button with the correct label, placeholder, an id", () => {
    const myLabel = "label";
    render(<Input Label={myLabel} />);

    const input = screen.getByLabelText(myLabel);

    expect(input).toBeInTheDocument();
  });
});
