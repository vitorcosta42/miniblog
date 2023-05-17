import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDq-h_FOu4O1j_OtGOnTqbZf71ZIfY5CiE",
  authDomain: "miniblog-feeaf.firebaseapp.com",
  projectId: "miniblog-feeaf",
  storageBucket: "miniblog-feeaf.appspot.com",
  messagingSenderId: "495117019722",
  appId: "1:495117019722:web:5c2ea8e3c4fa232e3814b3",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
