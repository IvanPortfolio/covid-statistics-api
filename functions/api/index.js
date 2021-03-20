const admin = require("firebase-admin");
const coronavirus = require("./coronavirus");
const database = require("./database");

const firestore = admin.firestore();

module.exports = {
  coronavirus,
  database,
  firestore,
};
