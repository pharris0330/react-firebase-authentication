import firebase from 'firebase/app';
import 'firebase/auth';

const devConfig = {
  apiKey: "AIzaSyDdJAjs2nGkhnRMli-zXiXghJdAYYqzv_I",
  authDomain: "react-firebase-authentic-527b0.firebaseapp.com",
  databaseURL: "https://react-firebase-authentic-527b0.firebaseio.com",
  projectId: "react-firebase-authentic-527b0",
  storageBucket: "",
  messagingSenderId: "1053578775470"
};



const prodConfig = {
    apiKey: "AIzaSyDfTtMizPfRNHIjQh7HzFsDpePnj4X_2Xc",
    authDomain: "the-best-app-ever-64bab.firebaseapp.com",
    databaseURL: "https://the-best-app-ever-64bab.firebaseio.com",
    projectId: "the-best-app-ever-64bab",
    storageBucket: "the-best-app-ever-64bab.appspot.com",
    messagingSenderId: "734336057133"
  };

  const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;


if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};
