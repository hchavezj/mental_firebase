import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCsCvkDkDdW_ocyW6lsVFnJ5Ci3P3FLX5M",
    authDomain: "final-mental.firebaseapp.com",
    projectId: "final-mental",
    storageBucket: "final-mental.appspot.com",
    messagingSenderId: "866664276375",
    appId: "1:866664276375:web:bc605bba795669926824d2"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth };