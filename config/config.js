const firebase = require("firebase/compat/app");
require("firebase/compat/auth");
var serviceAccount = require("../serviceAccountKey.json");
const firebaseConfig = {
    apiKey: "AIzaSyCH45w1FIc8u8Yrk--9kMN8F0vR8eCVb8w",
    authDomain: "reminder-app-73eac.firebaseapp.com",
    projectId: "reminder-app-73eac",
    storageBucket: "reminder-app-73eac.appspot.com",
    messagingSenderId: "768958437052",
    appId: "1:768958437052:web:4d46b89ddfccf259e1e2b9",
    measurementId: "G-F05R1G4PKN"
};
firebase.initializeApp(firebaseConfig);
module.exports = firebase;
