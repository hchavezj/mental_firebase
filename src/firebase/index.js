import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.VUE_APP_FIREBASE_APIKEY,
    authDomain: process.env.VUE_APP_FIREBASE_AUTHDOMAIN,
    projectId: process.env.VUE_APP_FIREBASE_PROJECTID,
    storageBucket: process.env.VUE_APP_FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGINGSENDERID,
    appId: process.env.VUE_APP_FIREBASE_APPID,
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth };