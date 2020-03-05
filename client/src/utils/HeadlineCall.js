import axios from "axios";
import cheerio from "cheerio";

export default {
  getHeadlines: function(url) {
    let currentHeadlines = [];

    return axios.get(url).then(function(response) {
      const $ = cheerio.load(response.data);
      $(".nfl-o-headlinestack__itemcontent").each(function(i, element) {
        const title = $(element)
          .children("a")
          .text();
        const link = $(element)
          .children("a")
          .attr("href");

        if (title && link) {
          currentHeadlines.push({ title: title, link: link, url:url });
        }
      });

      return currentHeadlines;
    });
  }
};
