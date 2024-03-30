import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCQmf-VYlJKVQ6NFDzKuECJN7sAkxU_iP4",
    authDomain: "olxcloneapp-ffd5b.firebaseapp.com",
    projectId: "olxcloneapp-ffd5b",
    storageBucket: "olxcloneapp-ffd5b.appspot.com",
    messagingSenderId: "206750746023",
    appId: "1:206750746023:web:18751e381829e72991e282",
    measurementId: "G-L0DJR7YCEW"
  };


  export const Firebase= firebase.initializeApp(firebaseConfig)