import GalleryComponent from "./gallery-component";
import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import * as firebase from "./firebase";

Enzyme.configure({ adapter: new Adapter() });

describe("gallery component", () => {
  const wrapper = Enzyme.shallow(<GalleryComponent />);
  let imageList = [];
  beforeAll(() => {
    imageList = {
      cat: {
        description: "My hair on Monday",
        original: "https://",
        thumbnail: "https://"
      },
      dog: {
        description: "My hair on Monday",
        original: "https://",
        thumbnail: "https://"
      },
      giraffe: {
        description: "My hair on Monday",
        original: "https://",
        thumbnail: "https://"
      },
      potato: {
        description: "My hair on Monday",
        original: "https://",
        thumbnail: "https://"
      }
    };
  });

  it("getRandomIndex should get a random photo index between 0 and 3", () => {
    var result = wrapper.instance().getRandomIndex();
    console.log(result);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(2);
  });

  it("setImages should set images state", () => {
    wrapper.instance().setImages,
      () => {
        imageList;
      };
    console.log(wrapper.state());
  });
});
