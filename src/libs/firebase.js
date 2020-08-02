import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAU26zpDBJ5V0IpjGBEnynHTJoDIVVih8E",
  authDomain: "scarpflix-88398.firebaseapp.com",
  databaseURL: "https://scarpflix-88398.firebaseio.com/",
  projectId: "scarpflix-88398",
  storageBucket: "scarpflix-88398.appspot.com",
  messagingSenderId: "137184325324",
  appId: "1:137184325324:web:68fd4f59865b05fbb2dc69",
  measurementId: "G-W8EH8TTZ9P",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
