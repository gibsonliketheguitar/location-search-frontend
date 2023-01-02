import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { Card } from "./card";

describe("Photo Card", () => {
  // let title: string;
  // let imgURL: string;
  // beforeEach(() => {
  //   (title = "Picture Photo Card"), (imgURL = "https://picsum.photos/200");
  // });
  // test("should render title as alt and src with imgURL", () => {
  //   render(<Card title={title} imgURL={imgURL} />);
  //   const image = screen.getByAltText("Picture Photo Card");
  //   expect(image).toBeDefined();
  //   const imageEncodedURI = encodeURIComponent("https://picsum.photos/200");
  //   expect.stringContaining(imageEncodedURI);
  //   expect(image.getAttribute("src")).toEqual(
  //     expect.stringContaining(imageEncodedURI)
  //   );
  // });
});
