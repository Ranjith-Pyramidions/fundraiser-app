// import { initializeApp } from "firebase/app";
// import {firebase} from "firebase/app";


// const firebaseConfig = {
//     apiKey: "AIzaSyCyBEeMtS2SG6qHeqyftxOzE3Zk_mjyQkA",
//     authDomain: "fundraiser-e4018.firebaseapp.com",
//     projectId: "fundraiser-e4018",
//     storageBucket: "fundraiser-e4018.appspot.com",
//     messagingSenderId: "549277724767",
//     appId: "1:549277724767:web:5495a44dd7fb323faeabea",
//     measurementId: "G-C272Y0KVMP"
//   }
// const app = initializeApp(firebaseConfig);
// const auth = app.auth();
// const db = app.firestore();
// const googleProvider = new firebase.auth.GoogleAuthProvider();
// const signInWithGoogle = async () => {
//   try {
//     const res = await auth.signInWithPopup(googleProvider);
//     const user = res.user;
//     const query = await db
//       .collection("users")
//       .where("uid", "==", user.uid)
//       .get();
//     if (query.docs.length === 0) {
//       await db.collection("users").add({
//         uid: user.uid,
//         name: user.displayName,
//         authProvider: "google",
//         email: user.email,
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const signInWithEmailAndPassword = async (email, password) => {
//   try {
//     await auth.signInWithEmailAndPassword(email, password);
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const registerWithEmailAndPassword = async (name, email, password) => {
//   try {
//     const res = await auth.createUserWithEmailAndPassword(email, password);
//     const user = res.user;
//     await db.collection("users").add({
//       uid: user.uid,
//       name,
//       authProvider: "local",
//       email,
//     });
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const sendPasswordResetEmail = async (email) => {
//   try {
//     await auth.sendPasswordResetEmail(email);
//     alert("Password reset link sent!");
//   } catch (err) {
//     console.error(err);
//     alert(err.message);
//   }
// };
// const logout = () => {
//   auth.signOut();
// };
// export default app;
// export {
//   auth,
//   db,
//   signInWithGoogle,
//   signInWithEmailAndPassword,
//   registerWithEmailAndPassword,
//   sendPasswordResetEmail,
//   logout
// };


// Import the functions you need from the SDKs you need
import {firebase} from "firebase/app";



import { initializeApp } from "firebase/app";

import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";


// import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyBEeMtS2SG6qHeqyftxOzE3Zk_mjyQkA",
  authDomain: "fundraiser-e4018.firebaseapp.com",
  projectId: "fundraiser-e4018",
  storageBucket: "fundraiser-e4018.appspot.com",
  messagingSenderId: "549277724767",
  appId: "1:549277724767:web:5495a44dd7fb323faeabea",
  measurementId: "G-C272Y0KVMP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);



const auth = app.auth();
const db = app.firestore;
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
 const FaceBookSiginIn = (callback) => {
  const auth = getAuth();
  const provider = new FacebookAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      callback(result);
      console.log(result);
    })
    .catch((error) => {});
};
export default app;
export {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  FaceBookSiginIn
};