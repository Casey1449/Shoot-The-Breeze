import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBWHTf4zFuseooqHpFPUUCeyG1wAXQAv1A",
  authDomain: "shoot-the-breeze-aa5d9.firebaseapp.com",
  databaseURL: "https://shoot-the-breeze-aa5d9.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "663151526913"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
export const signIn = () => auth.signInWithPopup(provider);
export const reference = firebase.database().ref('messages');
