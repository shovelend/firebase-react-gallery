import React from "react";
import ReactDOM from "react-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import "./index.css";
import GalleryComponent from "./gallery-component";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<GalleryComponent />, document.getElementById("root"));
registerServiceWorker();
