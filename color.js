module.exports = {
  luminosity: function () {
    return 0.2126 * parseInt(process.argv[2]) + 0.7152 * parseInt(process.argv[3]) + 0.0722 * parseInt(process.argv[4]);
  }
};
