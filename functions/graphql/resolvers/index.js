module.exports.Query = {
  countries: (_source, _params, { dataSources }) => {
    return dataSources.covid.getAll();
  },
  country: (_source, { id }, { dataSources }) => {
    return dataSources.covid.getByCountyId(id);
  },
};
