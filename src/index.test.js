import React from "react";
import ReactDOM from "react-dom";
import GalleryComponent from "./gallery-component";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<GalleryComponent />, div);
});
