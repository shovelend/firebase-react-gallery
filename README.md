# React Gallery

The first challenge of the [Findmypast](http://tech.findmypast.com/) front-end guild.

Working Online demo: https://reactgallery-64c24.firebaseapp.com/

## Getting Started

1. Clone the repository.

1. Create a Firebase project on the [Firebase Console](https://console.firebase.google.com).

1. In your project create a new storage folder `animals` and upload some .jpg images there. 

1. In your project create a realtime database and add a root object `animals` and for each image you uploaded create a child with the name of the .jpg file in the following structure: 

    * `animals`
      * `cat`
        * `description`: "Cat description"
        * `original`: "Link to cat.jpg in firebase storage"
        * `thumbnail`: "Thumbnail for your cat.jpg"

1. Update `src/config-firebase.js` with your project config.

1. Navigate to the folder and run `npm i`.

1. Run the app with `npm run start`.


Build the app with `npm run build`.

Run tests with `npm run test`.

## Requirements

* Main photo display area
  * Each photo should have a caption associated with it and displayed somewhere
* Next and Previous buttons to navigate through photos
  * When on the last photo and user clicks next, goes to the first photo
  * When on the first photo and user click previous, goes to the last photo
* Show all the images in the gallery as a list of thumbnails
  * When clicking a thumbnail, the main image will change to that selected image
* Highlight the thumbnail selected
