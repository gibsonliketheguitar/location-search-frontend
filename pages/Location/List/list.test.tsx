import React from "react";
import { List } from "./list";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";

describe("Location List", () => {
  const handleReset = () => {};

  test("should render initial copy ", () => {
    render(<List data={undefined} handleReset={handleReset} />);
    const text = screen.getByText("Search for your next experience");
    expect(text).toBeDefined();
  });

  test("should render '0 Location Found' when data is empty", () => {
    render(<List data={[]} handleReset={handleReset} />);
    const text = screen.getByText("0 Location Found");
    expect(text).toBeDefined();
  });

  test("should render  list of location", () => {
    const arr = [
      {
        name: "Fish and Chips",
        address: "Britain and UK what is the difference",
        rating: 3.9,
      },
      {
        name: "Curry House International",
        address: "India and Thai Street",
        rating: 4.5,
      },
      {
        name: "Sushi Express",
        address: "1 Day Main Dream",
        rating: 4.9,
      },
    ];

    render(<List data={arr} handleReset={handleReset} />);
    for (const { name, address, rating } of arr) {
      const nameText = screen.getByText(name);
      expect(nameText).toBeDefined();

      const addressText = screen.getByText(address);
      expect(addressText).toBeDefined();

      const ratingText = screen.getByText(rating);
      expect(ratingText).toBeDefined();
    }
  });
});
