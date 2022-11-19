// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs, setDoc, getDoc, doc,deleteDoc, addDoc } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import React from 'react'
import { randomUUID } from 'crypto';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyCs_kpca--WzYAMJP8s9L6jaGG_ZLqNaJ4",

  authDomain: "vicious5.firebaseapp.com",

  projectId: "vicious5",

  storageBucket: "vicious5.appspot.com",

  messagingSenderId: "667600387184",

  appId: "1:667600387184:web:f989ddabfb4f92c35488b5"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

const myDocs:any = []
 


const employesRef = collection(db, "employes")

export const uploadDataToEmployes = (async (myData:any) => {
  await addDoc(employesRef, myData)
})

export const deleteDataFromEmployes = (async (myData:any) => {
  await deleteDoc(doc(employesRef, myData))
})



