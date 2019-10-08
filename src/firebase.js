import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDg5vjUkth7E0ceAB80pGzJB8KEdUbK3_g",
  authDomain: "comentaki-phdev.firebaseapp.com",
  databaseURL: "https://comentaki-phdev.firebaseio.com",
  projectId: "comentaki-phdev",
  storageBucket: "",
  messagingSenderId: "173069114390",
  appId: "1:173069114390:web:3698a944e4e3afeee3a937"
};

firebase.initializeApp(firebaseConfig)

export default firebase