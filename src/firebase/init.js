import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_LbdQ6N4vpmT9Oc-8aCHkLeV0wVp1poM",
    authDomain: "bell-quiz.firebaseapp.com",
    projectId: "bell-quiz",
    storageBucket: "bell-quiz.appspot.com",
    messagingSenderId: "960455136894",
    appId: "1:960455136894:web:2470cfdb0e9067cab2aa2f",
    measurementId: "G-NJEEWNYPCF"
  };

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const db = getFirestore()
export default db