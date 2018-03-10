import firebase from "firebase";
import firebaseconfig from "./config-firebase";

firebase.initializeApp(firebaseconfig);

export { firebase as default, firebase };
