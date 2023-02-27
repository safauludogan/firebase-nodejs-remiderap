const admin = require('./config');

const db = admin.firestore();
const User = db.collection("Users");

module.exports = User;