import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0BZr4SJNKpzrZA6T46vUyXJyBylerF00',
  authDomain: 'mobile1-9f2d7.firebaseapp.com',
  projectId: 'mobile1-9f2d7',
  storageBucket: 'mobile1-9f2d7.appspot.com',
  messagingSenderId: '434879037389',
  appId: '1:434879037389:web:2f2f8ea9bf218b09108e84',
}

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
export const FIREBASE_DB = getFirestore(FIREBASE_APP)
