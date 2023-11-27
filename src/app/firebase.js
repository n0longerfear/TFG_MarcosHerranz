
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBAVX2FITvrVAm3jnLsf8Oht5ZgD2i_nzc",
    authDomain: "marcosbbdd-e707e.firebaseapp.com",
    projectId: "marcosbbdd-e707e",
    storageBucket: "marcosbbdd-e707e.appspot.com",
    messagingSenderId: "141099312269",
    appId: "1:141099312269:web:ef70e01085c1b96e5caec4",
    measurementId: "G-4GV5DSX07S"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);