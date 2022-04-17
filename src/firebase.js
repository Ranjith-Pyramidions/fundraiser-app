import { initializeApp } from "firebase/app";

import firebase from "firebase"
import "firebase/auth";
// import {getAuth,FacebookAuthProvider} from "firebase/auth";
import {handleOpen} from "../src/component/ForgotPasswordPage"

const firebaseConfig = {
    apiKey: "AIzaSyCyBEeMtS2SG6qHeqyftxOzE3Zk_mjyQkA",
    authDomain: "fundraiser-e4018.firebaseapp.com",
    projectId: "fundraiser-e4018",
    storageBucket: "fundraiser-e4018.appspot.com",
    messagingSenderId: "549277724767",
    appId: "1:549277724767:web:5495a44dd7fb323faeabea",
    measurementId: "G-C272Y0KVMP"
  };
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = async () => {
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
const FaceBookProvider = new firebase.auth.FacebookAuthProvider();

export const signInWithFace = async () => {
    try {
      const res = await auth.signInWithPopup(FaceBookProvider);
      const user = res.user;
      
    
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  export const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    // alert(err.message);
  }
};
export const registerWithEmailAndPassword = async (fname,lname, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    // alert(err.message);
  }
};

export const sendPasswordResetEmail = async (email,callback) => {
  try {
    await auth.sendPasswordResetEmail(email);
    callback("modal succes")
    // alert("Password reset link sent!");    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
export const logout = () => {
  auth.signOut();
};
export const FaceBookSiginIn = (callback) => {
    const auth = firebase.auth().getAuth();
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth.signInWithPopup(auth, provider)
      .then((result) => {
        callback(result);
        console.log(result);
      })
      .catch((error) => {});
  };
export default {
  auth,
  db,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
  FaceBookSiginIn,
  signInWithFace
};