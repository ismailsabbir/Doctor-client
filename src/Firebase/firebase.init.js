import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBINYOOE85jTdRirA8_ODXz7clbZZCMj5Q",
  authDomain: "doctor-services-f6ff2.firebaseapp.com",
  projectId: "doctor-services-f6ff2",
  storageBucket: "doctor-services-f6ff2.appspot.com",
  messagingSenderId: "112260985153",
  appId: "1:112260985153:web:bf791de322cff95e15"

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
};
const app = initializeApp(firebaseConfig);
export default app;

