import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getDatabase, ref, get } from "firebase/database";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

console.log(API_KEY);
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "babysitters-6fbe8.firebaseapp.com",
  projectId: "babysitters-6fbe8",
  storageBucket: "babysitters-6fbe8.appspot.com",
  messagingSenderId: "216490295250",
  appId: "1:216490295250:web:ae40fbee9335fa0812920b",
};

export const fetchData = async () => {
  const db = getDatabase();
  const dataRef = ref(db);

  try {
    const snapshot = await get(dataRef);
    if (snapshot.exists()) {
      const data = snapshot.val();

      return data;
    } else {
      console.log("No data available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
