import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyDXmEmk6zayfxfbDaTo_QuTF2bJi8SuST0",
    authDomain: "easestay-7e9ba.firebaseapp.com",
    projectId: "easestay-7e9ba",
    storageBucket: "easestay-7e9ba.appspot.com",
    messagingSenderId: "824583655401",
    appId: "1:824583655401:web:7f62180955ed801f2e0578",
    measurementId: "G-QVD4RPPZXP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
