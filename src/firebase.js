import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArAGbfhjOTj4KC_3pUNVwyFB8MlZ_Z46c",
  authDomain: "tita-social.firebaseapp.com",
  databaseURL: "https://tita-social-default-rtdb.firebaseio.com",
  projectId: "tita-social",
  storageBucket: "tita-social.appspot.com",
  messagingSenderId: "627495516437",
  appId: "1:627495516437:web:0add51b6e772d464e6911c",
  measurementId: "G-L7615CCQ75"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
