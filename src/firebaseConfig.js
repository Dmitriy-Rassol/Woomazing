import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLa5vQBYo3sANLoTex_ejFcJ5LMe3vbzI",
    authDomain: "womazing-fe4dc.firebaseapp.com",
    databaseURL: "https://womazing-fe4dc-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "womazing-fe4dc",
    storageBucket: "womazing-fe4dc.appspot.com",
    messagingSenderId: "224899127618",
    appId: "1:224899127618:web:f9f75aec517e58b076d0db"
  };

const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);