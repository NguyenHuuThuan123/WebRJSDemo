
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBo4xLvpwX3DbC23TzPZUXqY6FdDN1aNjE",
  authDomain: "maltimark-ec975.firebaseapp.com",
  projectId: "maltimark-ec975",
  storageBucket: "maltimark-ec975.appspot.com",
  messagingSenderId: "741540686613",
  appId: "1:741540686613:web:c4c825e58dd235d3ced71c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage =getStorage(app);

export default app;