
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCAmsCo2szM2PodGxGSh8Gk08r330RWZDs",
    authDomain: "smartbakery-52ce5.firebaseapp.com",
    projectId: "smartbakery-52ce5",
    storageBucket: "smartbakery-52ce5.appspot.com",
    messagingSenderId: "635323884647",
    appId: "1:635323884647:web:58c3ae27efabe2b74560c2",
    measurementId: "G-2RBD9BMBJ4",
};


const app = initializeApp(firebaseConfig);

const auth =  getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db,storage};