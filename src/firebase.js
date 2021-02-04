import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
// export const storage = firebase.storage();

import { warn } from "verdu/logs";

export const col = async (collectionName) => {
  try {
    const res = await db.collection(collectionName).get();
    const collectionData = [];

    for (let i = 0; i < res.size; i++) {
      collectionData.push(res.docs[i].data());
    }

    return collectionData;
  } catch (error) {
    warn(error);
  }
};

export const doc = async (collectionName, documentId) => {
  try {
    const documentData = await db.collection(collectionName).doc(documentId).get();
    return documentData.data();
  } catch (error) {
    warn(error);
  }
};

export const logIn = async (email, password) => {
  try {
    const userState = await auth.signInWithEmailAndPassword(email, password);
    return userState;
  } catch (error) {
    warn(error);
  }
};

export const fb = {
  inc: firebase.firestore.FieldValue.increment(1),
  dec: firebase.firestore.FieldValue.increment(-1),
  autoId: () => server.db.collection("rtes").doc().id,
  del: () => firebase.firestore.FieldValue.delete(),
  arrAdd: (item) => firebase.firestore.FieldValue.arrayUnion(item),
  arrDel: (item) => firebase.firestore.FieldValue.arrayRemove(item),
};
