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
async function sendToGoogleSheet(studentId, studentName, entries) {
  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxJ-IGsjzrqUlykZEgK_BtLtz4O7BCF8tv8_Hus1dOENrN_Wnr0NzTAT38KMGamy-XJlQ/exec", {
      method: "POST",
      mode: "no-cors", // If you don't need a response
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        studentId,
        studentName,
        entries,
      }),
    });

    console.log("Sent to Google Sheet successfully.");
  } catch (error) {
    console.error("Error sending to Google Sheet:", error);
  }
}
