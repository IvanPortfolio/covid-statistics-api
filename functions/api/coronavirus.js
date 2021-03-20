const axios = require("axios");
const functions = require("firebase-functions");

const api = axios.create({
  baseURL: "https://worldometers.p.rapidapi.com",
  headers: {
    "x-rapidapi-key": functions.config().rapidapi.key,
    "Content-Type": "application/json",
  },
});

exports.getAllCountriesCases = () => {
  return api.get("/api/coronavirus/all/").then((result) => result.data.data);
};
