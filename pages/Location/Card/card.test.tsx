import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { LocationCard } from "./card";

describe("Location Card", () => {
  let name: string;
  let address: string;
  let rating: number;

  test("should render given name, address, and rating", () => {
    name = "Pizza King";
    address = "123 North King Street";
    rating = 5;

    render(<LocationCard name={name} address={address} rating={rating} />);

    const storeName = screen.getByText(name);
    expect(storeName).toBeDefined();

    const storeAddress = screen.getByText(address);
    expect(storeAddress).toBeDefined();

    const storeRating = screen.getByText("5");
    expect(storeRating).toBeDefined();
  });
});
