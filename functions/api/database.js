const admin = require("firebase-admin");

const firestore = admin.firestore();

exports.saveTotalStatistics = (data) => {
  return firestore.runTransaction(async (transaction) => {
    for (const countryName in data) {
      if (Object.prototype.hasOwnProperty.call(data, countryName)) {
        const docRef = firestore.collection("covid-cases").doc(countryName);
        transaction.set(docRef, data[countryName]);
      }
    }
  });
};
