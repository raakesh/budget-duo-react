import Rebase from "re-base";
import firebase from "firebase";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC4EecYNivZ-jgXWhesmTK7G9pGifjDC7Q",
  authDomain: "budget-duo-react.firebaseapp.com",
  databaseURL: "https://budget-duo-react.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export default base;
