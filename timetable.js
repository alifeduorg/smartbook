// timetable.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbpphH9wQ53Jo4evl8m4oNsaOXvombJVA",
  authDomain: "timetable-d0e77.firebaseapp.com",
  projectId: "timetable-d0e77",
  storageBucket: "timetable-d0e77.firebasestorage.app",
  messagingSenderId: "550695601869",
  appId: "1:550695601869:web:655c568a1290ae582bcb84",
  measurementId: "G-PCM44PV4CY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Place all your functions like fetchStudentSubjectData, generateTimetable, addRow, submitTimetable, saveToFirestoreAndSheet, sendToGoogleSheet here

export { db, fetchStudentSubjectData, generateTimetable, submitTimetable };
