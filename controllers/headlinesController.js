const axios = require("axios");
const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    const { url: params } = req;
    axios
      .get(props.url, { params })
      .then(results =>
        results.data.items.filter(result => result.title && result.link)
      );
    //   .then()
  }
};
