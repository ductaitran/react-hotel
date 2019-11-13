import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDiGY9f0A-H0Z-7ciWa8OAsrApkjcKzNQw",
  authDomain: "rimland-hotel98.firebaseapp.com",
  databaseURL: "https://rimland-hotel98.firebaseio.com",
  projectId: "rimland-hotel98",
  storageBucket: "rimland-hotel98.appspot.com",
  messagingSenderId: "808497401696"
};

const fire = firebase.initializeApp(config);
const database = firebase.database();
export const productRef = database.ref('products');
export const wishProductRef = database.ref('wishProducts');

export default fire;
