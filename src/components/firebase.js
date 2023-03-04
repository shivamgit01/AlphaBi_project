import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCC5WYOebW_hNuH9ktNLtz06zkX1Nhxcd4",
  authDomain: "shivam-1-eb9d9.firebaseapp.com",
  databaseURL: "https://shivam-1-eb9d9.firebaseio.com",
  projectId: "shivam-1-eb9d9",
  storageBucket: "shivam-1-eb9d9.appspot.com",
  messagingSenderId: "382465871563",
  appId: "1:382465871563:web:3582ad414b5be952c9554e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
