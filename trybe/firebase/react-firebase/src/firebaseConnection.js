import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCiSIl2hLFdV5oBRfmsl4gCmCqQM3uRdEU",
  authDomain: "curso-react-98tm.firebaseapp.com",
  projectId: "curso-react-98tm",
  storageBucket: "curso-react-98tm.appspot.com",
  messagingSenderId: "535417911763",
  appId: "1:535417911763:web:0a5bde9717ff696e165726",
  measurementId: "G-EE49R99LZN"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };