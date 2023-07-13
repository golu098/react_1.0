// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase";


// import { auth } from "../firebase";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   // apiKey: REACT_APP_API_KEY_GOES_HERE,
//   // authDomain: REACT_APP_AUTH_DOMAIN_GOES_HERE,
//   // projectId: REACT_APP_PROJECT_ID_GOES_HERE,
//   // storageBucket: REACT_APP_STORAGE_BUCKET_GOES_HERE,
//   // messagingSenderId: REACT_APP_MESSSAGING_SENDER_ID_GOES_HERE,
//   // appId: REACT_APP_APP_ID_GOES_HERE,
//   apiKey: "AIzaSyB6K7P4erS343WjIAWRBW0z_bvBynue6Z8",
//    authDomain: "react-chat-48c4e.firebaseapp.com",
//     projectId: "react-chat-48c4e", 
//     storageBucket: "react-chat-48c4e.appspot.com", 
//     messagingSenderId: "619759000200", 
//     appId: "1:619759000200:web:026ec36581ce40267a1d3d", 
//     // measurementId: "G-4GGCM1CD07"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6K7P4erS343WjIAWRBW0z_bvBynue6Z8", 
  authDomain: "react-chat-48c4e.firebaseapp.com", 
  projectId: "react-chat-48c4e",
   storageBucket: "react-chat-48c4e.appspot.com", 
   messagingSenderId: "619759000200", 
   appId: "1:619759000200:web:026ec36581ce40267a1d3d", 
   measurementId: "G-4GGCM1CD07"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
