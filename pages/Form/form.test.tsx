import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { radioOption } from "./_radioOption";
import { Form } from ".";

describe("form", () => {
  test("should render input, radio button, and clear and submit button", async () => {
    const { container, getByText, getByRole, getByDisplayValue } = await render(
      <Form setList={jest.fn()} setLoading={jest.fn()} />
    );
    //Verify input
    expect(container.querySelector("keyword")).toBeDefined();

    //Verify radio section
    expect(getByText("Select a Location")).toBeDefined();
    expect(getByRole("radiogroup")).toBeDefined();
    for (const { name, state, latitude, longitude } of radioOption) {
      expect(getByText(name + ", " + state)).toBeDefined();
      expect(getByDisplayValue(latitude + "," + longitude)).toBeDefined();
    }

    //verify aria-label and text for clear and submit button are render
    const buttonTest = [
      { ariaLabel: "clear search form", title: "Clear all" },
      { ariaLabel: "submit search", title: "Search" },
    ];

    for (const { ariaLabel, title } of buttonTest) {
      const submitButton = getByRole("button", { name: ariaLabel });
      expect(submitButton).toBeDefined();
      expect(submitButton).toHaveTextContent(title);
    }
  });
});
