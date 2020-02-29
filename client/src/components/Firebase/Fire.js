import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBujyhiJMVaB9LbkCd2OhC7wD6NBy-Ebrw",
  authDomain: "rutgers-coding-a-1572391624235.firebaseapp.com",
  databaseURL: "https://rutgers-coding-a-1572391624235.firebaseio.com",
  projectId: "rutgers-coding-a-1572391624235",
  storageBucket: "rutgers-coding-a-1572391624235.appspot.com",
  messagingSenderId: "205492089283",
  appId: "1:205492089283:web:214eb94fb8b7047b918d76"
};

const fire = firebase.initializeApp(config);
export default fire;
