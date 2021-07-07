import firebase from 'firebase'


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB5U9q1Do3ieW_MZS2D1-O3X-zNvumzm5k",
    authDomain: "fir-react-example-ce626.firebaseapp.com",
    projectId: "fir-react-example-ce626",
    databaseURL:"https://fir-react-example.firebaseio.com",
    storageBucket: "fir-react-example-ce626.appspot.com",
    messagingSenderId: "159116745788",
    appId: "1:159116745788:web:2522580e7e77644d7db739"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

export default fire;
