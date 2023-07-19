import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz9de5tiIdMjS-A5q_lHOkcO4q6YCMjrQ",
  authDomain: "rent--hotel.firebaseapp.com",
  projectId: "rent--hotel",
  storageBucket: "rent--hotel.appspot.com",
  messagingSenderId: "38287948409",
  appId: "1:38287948409:web:af1fd28e66a3160888f2a8",
  measurementId: "G-FZ83HYELXK",
};

const server = firebase.initializeApp(firebaseConfig);
const auth = server.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
