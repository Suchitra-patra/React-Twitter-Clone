import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig =  {
  apiKey: "AIzaSyDBKYjQJpQ-I-pBKkuNLDIFL_SuyQ7y6OY",
  authDomain: "twitter-clone-10537.firebaseapp.com",
  projectId: "twitter-clone-10537",
  storageBucket: "twitter-clone-10537.appspot.com",
  messagingSenderId: "393020357654",
  appId: "1:393020357654:web:6da93a0def28b646638937"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()

 export default db;