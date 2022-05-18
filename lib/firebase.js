import firebase from 'firebase/app';
import { getApps } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCU5GUzABLRUE_pYxV4FDk_axuq6D1hs_k",
  authDomain: "nextfire-app-e0b6b.firebaseapp.com",
  projectId: "nextfire-app-e0b6b",
  storageBucket: "nextfire-app-e0b6b.appspot.com",
  messagingSenderId: "100411996577",
  appId: "1:100411996577:web:6119fa77f12236c76b33e0",
  measurementId: "G-VB1MKVCC20"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Auth exports
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();
export const storage = firebase.storage();

//Helper functions

/**
 * @param {string} username
 */

 export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**
 * 
 * @param {DocumentSnapShot} doc 
 */
export function postToJSON(doc){
  const data = doc.data()
  return{
    ...data,

    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  }
}

