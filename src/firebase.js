import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDb-uGdou_AtlXxmkGmNJyHdxDJlNAYmOs",
    authDomain: "fb-clone-f08df.firebaseapp.com",
    projectId: "fb-clone-f08df",
    storageBucket: "fb-clone-f08df.appspot.com",
    messagingSenderId: "621583843274",
    appId: "1:621583843274:web:34da7caf67688687045933",
    measurementId: "G-LSMBVEKSDG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;