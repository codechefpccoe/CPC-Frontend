// import { initializeApp } from "@firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyAbXohf0YEa6bBi4Xi68F8eHYb75ONI8Eo",
//   authDomain: "pccoe-codechef-chapter.firebaseapp.com",
//   projectId: "pccoe-codechef-chapter",
//   storageBucket: "pccoe-codechef-chapter.appspot.com",
//   messagingSenderId: "648270158934",
//   appId: "1:648270158934:web:524a1b6d38cbee1baaeff7",
//   measurementId: "G-5QX59XY2X7",
// };

// initializeApp(firebaseConfig);
// const provider = new GoogleAuthProvider();
// const auth = getAuth();

// export const googleLoginWithPopup = async () => {
//   return await signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       return user;
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// };

// // ajinkya.patil20@pccoepune.org
// // codechef#78

// // export const login = async (email, password, sl) => {
// //     await firebase.auth().signInWithEmailAndPassword(email, password)
// //         .then(() => {
// //             sl("loggedin")
// //         })
// //         .catch((error) => {
// //             sl("error")
// //         });
// // }

// // export const logoutG = async (sl) => {
// //     await firebase.auth().signOut().then(() => {
// //         sl("logout")
// //     })
// // }

// // export const logout = async (sl) => {
// //     await firebase.auth().signOut().then(() => {
// //         sl("loggedout")
// //     })
// //     localStorage.removeItem("user")
// // }

// // const provider = new firebase.auth.GoogleAuthProvider();

// // export const loginG = async (setuser) => {
// //     await firebase.auth()
// //         .signInWithPopup(provider)
// //         .then((result) => {
// //             setuser(result.user)
// //             document.cookie = `email=${result.user.email}`;
// //             document.cookie = `photoURL=${result.user.photoURL}`;
// //             document.cookie = `displayName=${result.user.displayName}`;
// //         })

// // }



// //  firebase deploy --only hosting:codechefpccoe
// // export const db = firebase.firestore();
// export { auth };
