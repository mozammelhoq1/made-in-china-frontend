// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

//   apiKey: "AIzaSyDAw-yE2kLB16962IpuVsyE-KoEn0Q1pv0",
//   authDomain: "made-in-china-web-app.firebaseapp.com",
//   projectId: "made-in-china-web-app",
//   storageBucket: "made-in-china-web-app.appspot.com",
//   messagingSenderId: "156001817111",
//   appId: "1:156001817111:web:38b77e16a64ede13a48252",
