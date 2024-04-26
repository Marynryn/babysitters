import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const API_KEY = "AIzaSyD489JVZTN88t0iLOihy1HLmkaJ_Ps3FLY";

console.log(API_KEY);
const firebaseConfig = {
  apiKey: "AIzaSyD489JVZTN88t0iLOihy1HLmkaJ_Ps3FLY",
  authDomain: "babysitters-6fbe8.firebaseapp.com",
  projectId: "babysitters-6fbe8",
  storageBucket: "babysitters-6fbe8.appspot.com",
  messagingSenderId: "216490295250",
  appId: "1:216490295250:web:ae40fbee9335fa0812920b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
