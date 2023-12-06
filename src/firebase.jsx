import { initializeApp } from "firebase/app";
// const firebaseConfig = {
//     apiKey: "AIzaSyAzpOjLPsKzJEmZ9IgrfTJ3V9EzXLXozIs",
//     authDomain: "triveous-web-app.firebaseapp.com",
//     projectId: "triveous-web-app",
//     storageBucket: "triveous-web-app.appspot.com",
//     messagingSenderId: "485202498931",
//     appId: "1:485202498931:web:0f2ad3bb991dbadc2b2106",
//     databaseURL:'https://triveous-web-app-default-rtdb.firebaseio.com/'

//   };

const firebaseConfig = {
  apiKey: "AIzaSyDy9fbUuOgBe0kqDW5xlupPk2HPQ-lbuSo",
  authDomain: "news-app-dbfaf.firebaseapp.com",
  projectId: "news-app-dbfaf",
  storageBucket: "news-app-dbfaf.appspot.com",
  messagingSenderId: "1086975786942",
  appId: "1:1086975786942:web:daf4cd5169d46d11c103ef",
  measurementId: "G-NQYQ6CYX05",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
