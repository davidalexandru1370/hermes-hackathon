// Import the functions you need from the SDKs you need
import { getFirestore, collection, getDocs, setDoc, getDoc, doc,deleteDoc, addDoc, DocumentReference } from 'firebase/firestore/lite';
import { initializeApp } from "firebase/app";
import React from 'react'
import { randomUUID } from 'crypto';
import { deleteObject, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { myEmployeDocument } from './Model/myEmployeDocument';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { IEmployee } from './Model/IEmployee';

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
 


const employesRef = collection(db, "employes")

export const getAllEmployeeData = (async (employees:IEmployee[]) => {
  const querySnapshot = await getDocs(collection(db, "employes"));
  querySnapshot.forEach((doc) => {
    employees.push({data: {
      employeId: doc.data().employeId,
      employeName: doc.data().employeName,
      employeDepartment: doc.data().employeDepartment,
      employeStartDate: doc.data().employeStartDate,
    },
    id: doc.id})
  })
})

export const uploadDataToEmployes = (async (myData:any) => {
  await addDoc(employesRef, myData)
})

export const uploadDocumentData = (async (myData:any) => {
  await addDoc(collection(db, "documents"), myData)
})

export const testUpload = async () => {
  const docRef = await addDoc(collection(db, "documents"), {
    name: "Tokyo",
    country: "Japan"
  });
}

export const deleteDataFromEmployes = (async (myData:any) => {
  await deleteDoc(doc(employesRef, myData))
})

export const deleteFileDocument = (async (documentId:any) => {
  await deleteDoc(doc(db, "documents", documentId))
})

export const deleteFile = (async (name:any) => {
  deleteObject(ref(storage, `Medical_Files/${name}.pdf`)).then(() => {
    
  }).catch((error) => {
    console.log(error)
  })
})

const storage = getStorage(app)

const pdfsref = ref(storage, 'Medical_Files');

export const downloadData = async(filename:any)  => getDownloadURL(ref(storage, `Medical_Files/${filename}.pdf`)).then(url => {

  window.open(
    `${url}`,
    "_blank",
    "fullscreen=yes"
  )

})
.catch((error) =>{
  console.log(error);
});

export const deleteMedicalFile = async(filename:any) => deleteObject(ref(storage, `Medical_Files/${filename}.pdf`)).then(() => {
  console.log("SUCCESS");
}).catch((error) => {
  console.log(error);
})


export const getEmployeDocuments = async (employeDocuments:myEmployeDocument[]) => {
  const querySnapshot = await getDocs(collection(db, "documents"));
  querySnapshot.forEach((document) => {
    employeDocuments.push({
      id: document.id,
      fileId : document.data().fileId,
      name : document.data().employeName,
      date: document.data().uploadDate.toDate()
    })
  })
}

export const uploadPDFToDatabase = async (file:File, name:any) => {
  uploadBytes(ref(storage, `Medical_Files/${name}`), file).then((snapshot) => {
    
  })
}

const auth = getAuth(app)

export const logInUser = async (email:any, password:any) => {
  let user = {}
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredentials) => {
    user =  userCredentials.user;
  })
  .catch((error) => {
    console.log(error)
  })
  return user
}