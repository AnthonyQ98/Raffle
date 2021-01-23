import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCUPJ7fDTNi62frDOu8o-FPoS2gomjt0iU",
  authDomain: "raffle-cd814.firebaseapp.com",
  projectId: "raffle-cd814",
  storageBucket: "raffle-cd814.appspot.com",
  messagingSenderId: "903547548457",
  appId: "1:903547548457:web:66f1033942d13279063d38",
  measurementId: "G-91380WWFBV",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
