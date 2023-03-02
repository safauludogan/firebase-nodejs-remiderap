const firebase = require('./config');

const db = firebase.firestore();
const Notes = db.collection("Notes");

module.exports = Notes;