const { coronavirus, database } = require("../api");
const helpers = require("../helpers");

exports.syncCovidCasesData = async () => {
  const allCountries = await coronavirus.getAllCountriesCases();
  const mappedAllCountries = helpers.mapCovidCasesToDatabase(allCountries);
  await database.saveTotalStatistics(mappedAllCountries);
};
