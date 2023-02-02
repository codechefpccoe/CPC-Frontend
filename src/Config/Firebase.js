import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbXohf0YEa6bBi4Xi68F8eHYb75ONI8Eo",
  authDomain: "pccoe-codechef-chapter.firebaseapp.com",
  projectId: "pccoe-codechef-chapter",
  storageBucket: "pccoe-codechef-chapter.appspot.com",
  messagingSenderId: "648270158934",
  appId: "1:648270158934:web:524a1b6d38cbee1baaeff7",
  measurementId: "G-5QX59XY2X7",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const provider = new firebase.auth.GoogleAuthProvider();

export const googleLoginUsingPopup = async () => {
  return await firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      return result?.user;
    })
    .catch((e) => console.log(e));
};

export const createUserWithUsernamePassword = async (email, password) => {
  return await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCred) => {
      return userCred.user;
    });
};

export const forgetPasswordWithEmail = async (email) => {
  return firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(() => {
      return true;
    })
    .catch((e) => console.log(e));
};

export const loginUserWithUsernamePassword = async (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      return user;
    });
};

export const LogoutFromAccount = async () => {
  await firebase
    .auth()
    .signOut()
    .then((d) => {
      console.log(d);
    });
};

export const db = firebase.firestore();
