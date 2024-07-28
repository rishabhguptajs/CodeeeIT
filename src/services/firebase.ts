import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDlci9B158KSMjz1RYqpZPF0gyH20pgorg",
    authDomain: "code-snippet-manager-3a1c6.firebaseapp.com",
    projectId: "code-snippet-manager-3a1c6",
    storageBucket: "code-snippet-manager-3a1c6.appspot.com",
    messagingSenderId: "951835311881",
    appId: "1:951835311881:web:ae20352f607084ec3eddd8",
    measurementId: "G-N5JXTLR4B4"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);