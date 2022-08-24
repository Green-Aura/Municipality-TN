import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/storage"
import "@react-native-firebase/messaging"

const firebaseConfig = {
    apiKey: "AIzaSyD9vomPbqwHl93F4PM9vo4LWqJblQoB_1E",
    authDomain: "municipality-88e63.firebaseapp.com",
    projectId: "municipality-88e63",
    storageBucket: "municipality-88e63.appspot.com",
    messagingSenderId: "934233926555",
    appId: "1:934233926555:web:1b846b5d204319526ecf3e",
    measurementId: "G-798XVN2SHD"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }; 