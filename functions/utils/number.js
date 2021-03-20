module.exports.parseIntValue = (value) => {
  const result = parseInt(value.replace(/,/g, ""));

  return isNaN(result) ? null : result;
};
