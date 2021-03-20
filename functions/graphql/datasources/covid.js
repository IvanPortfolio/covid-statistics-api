/* eslint-disable require-jsdoc*/
const { DataSource } = require("apollo-datasource");

class Covid extends DataSource {
  constructor() {
    super();
  }

  initialize(config) {
    this.firestore = config.context.firestore;
  }

  async getByCountyId(id) {
    const doc = await this.firestore.collection("covid-cases").doc(id).get();

    return doc.data();
  }

  async getAll() {
    const ref = await this.firestore.collection("covid-cases").get();

    return ref.docs.map((doc) => doc.data());
  }
}

module.exports = Covid;
