const firebase = require("firebase-admin");
const functions = require("firebase-functions");

// This should be at very top, before any other components loaded
firebase.initializeApp();

const controllers = require("./controllers");
const graphql = require("./graphql");

exports.fetchDataCron = functions.pubsub
  .schedule("every 1 hours synchronized")
  .onRun(controllers.syncCovidCasesData);

exports.graphql = functions.https.onRequest(graphql.createHandler());
