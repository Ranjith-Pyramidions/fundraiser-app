// import { initializeApp } from "firebase/app";

// import firebase from "firebase/app"
// import "firebase/auth"

// import {
//   GoogleAuthProvider,
//   sendPasswordResetEmail,
//   signInWithPopup,
//   FacebookAuthProvider,
// } from "firebase/auth";

// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
// } from "firebase/auth";

// const app = firebase.initializeApp({
//   apiKey: "AIzaSyCyBEeMtS2SG6qHeqyftxOzE3Zk_mjyQkA",
//   authDomain: "fundraiser-e4018.firebaseapp.com",
//   projectId: "fundraiser-e4018",
//   storageBucket: "fundraiser-e4018.appspot.com",
//   messagingSenderId: "549277724767",
//   appId: "1:549277724767:web:5495a44dd7fb323faeabea",
//   measurementId: "G-C272Y0KVMP"
// })

// // const app = initializeApp(firebaseConfig);
// export const auth = app.auth();


// export const createSigninWithEmail = (email, password, name, callback) => {
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       callback(userCredential);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// export const signInWithEmail = (email, password, callback) => {
//   const auth = getAuth();
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       callback(userCredential.user);
//     })
//     .catch((error) => {
//       console.log(error);
//     });


// export const googleSignin = (callback) => {
//   const provider = new GoogleAuthProvider();
//   const auth = getAuth();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       callback(result);
//     })
//     .catch((error) => {});
// };



// export const ResetPassword = (email, callback) => {
//   const auth = getAuth();
//   sendPasswordResetEmail(auth, email)
//     .then((success) => {
//       callback(success);
//     })
//     .catch((error) => {});
// };

// export const FaceBookSiginIn = (callback) => {
//   const auth = getAuth();
//   const provider = new FacebookAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       callback(result);
//       console.log(result);
//     })
//     .catch((error) => {});
// };
// export default app;
