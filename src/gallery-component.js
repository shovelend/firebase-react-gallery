import React, { Component } from "react";
import firebase from "./firebase";
import ImageGallery from "react-image-gallery";

let _imageGallery;

class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
  }

  getImages() {
    firebase
      .database()
      .ref("animals")
      .on("value", this.setImages);
  }

  setImages = animals => {
    let fireImages = [];

    animals.forEach(animal => {
      let item = animal.val();
      item.key = animal.key;
      fireImages.push(item);
    });

    this.setState({
      images: fireImages
    });
    this._imageGallery.items = fireImages;
  };

  componentDidMount() {
    this.getImages();
  }

  getRandomIndex() {
    let randomIndex = Math.floor(Math.random() * this.state.images.length);
    this.setState({ getCurrentIndex: randomIndex });
    return randomIndex;
  }

  render() {
    return (
      <div>
        <ImageGallery
          ref={i => (this._imageGallery = i)}
          items={this.state.images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
          showFullscreenButton={false}
          showPlayButton={false}
        />
        <button
          id="randomButton"
          onClick={() => this._imageGallery.slideToIndex(this.getRandomIndex())}
        >
          {" "}
          Surprise me!{" "}
        </button>{" "}
      </div>
    );
  }
}

export default GalleryComponent;
