import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBUkvDNxBnzMVuolvg9RbqCbey6XXhFHZI",
  authDomain: "dynamite-5e6ea.firebaseapp.com",
  projectId: "dynamite-5e6ea",
  storageBucket: "dynamite-5e6ea.appspot.com",
  messagingSenderId: "904031290870",
  appId: "1:904031290870:web:04671f0462eb1945b5b3d7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.firestore();
