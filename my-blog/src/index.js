import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXgRveXNWy5WGK6tBX-PGSYdeJu-gWNpc",
  authDomain: "react-blog-app-7a42a.firebaseapp.com",
  projectId: "react-blog-app-7a42a",
  storageBucket: "react-blog-app-7a42a.appspot.com",
  messagingSenderId: "630053122103",
  appId: "1:630053122103:web:61701ef4d9819514dacfb2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

