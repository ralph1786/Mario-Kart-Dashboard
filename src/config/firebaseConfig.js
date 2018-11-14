import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBd4c9mR5jqXY-kc7a4f62jK0kHCHdzLMA",
  authDomain: "mariokart-cbfa1.firebaseapp.com",
  databaseURL: "https://mariokart-cbfa1.firebaseio.com",
  projectId: "mariokart-cbfa1",
  storageBucket: "mariokart-cbfa1.appspot.com",
  messagingSenderId: "108420484920"
};
firebase.initializeApp(config);

firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;
