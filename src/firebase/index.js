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

// const firebaseConfig = {
//     apiKey: "AIzaSyCsCvkDkDdW_ocyW6lsVFnJ5Ci3P3FLX5M",
//     authDomain: "final-mental.firebaseapp.com",
//     projectId: "final-mental",
//     storageBucket: "final-mental.appspot.com",
//     messagingSenderId: "866664276375",
//     appId: "1:866664276375:web:bc605bba795669926824d2"
// };

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth };

// VUE_FIREBASE_APIKEY: "AIzaSyCsCvkDkDdW_ocyW6lsVFnJ5Ci3P3FLX5M",
// VUE_FIREBASE_AUTHDOMAIN: "final-mental.firebaseapp.com",
// VUE_FIREBASE_PROJECTID: "final-mental",
// VUE_FIREBASE_STORAGEBUCKET: "final-mental.appspot.com",
// VUE_FIREBASE_MESSAGINGSENDERID: "866664276375",
// VUE_FIREBASE_APPID: "1:866664276375:web:bc605bba795669926824d2"