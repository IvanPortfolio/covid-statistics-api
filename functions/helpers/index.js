const utils = require("../utils");

exports.mapCovidCasesToDatabase = (data) => {
  const mappedData = data.map((item) => ({
    activeCases: utils.parseIntValue(item["Active Cases"]),
    country: item["Country"],
    critical: utils.parseIntValue(item["Critical"]),
    deathsPerMillion: utils.parseIntValue(item["Deaths/1M pop"]),
    newCases: utils.parseIntValue(item["New Cases"]),
    newDeaths: utils.parseIntValue(item["New Deaths"]),
    newRecovered: utils.parseIntValue(item["New Recovered"]),
    population: utils.parseIntValue(item["Population"]),
    region: item["Region"],
    testsPerMillion: utils.parseIntValue(item["Tests/1M pop"]),
    totalCases: utils.parseIntValue(item["Total Cases"]),
    totalCasesPerMillion: utils.parseIntValue(item["Total Cases/1M pop"]),
    totalDeaths: utils.parseIntValue(item["Total Deaths"]),
    totalRecovered: utils.parseIntValue(item["Total Recovered"]),
    totalTests: utils.parseIntValue(item["Total Tests"]),
  }));

  const result = {};

  mappedData.forEach((item) => (result[item.country] = item));

  return result;
};
