const request = require("request");
const { load } = require("cheerio");
const _ = require("lodash");

module.exports = async (message, path, xpath, att) => {
  var options = {
    url: path,
    method: "GET",
    headers: {
      Accept: "text/html",
      "User-Agent": "Chrome",
    },
  };

  request(options, function (error, response, body) {
    if (error) {
      console.error();
      return;
    }

    $ = load(body);

    var links = $(xpath);
    var urls = new Array(links.length)
      .fill(0)
      .map((v, i) => links.eq(i).attr(att));

    if (!urls[0]) {
      message.channel.send("Ops.. Não achei o que procurava.. 😔");
      return;
    }

    urls = _.shuffle(urls);

    var x = 0;
    while (!urls[x].startsWith("http")) {
      x += 1;
      if (x == 100 && !urls[x].startsWith("http")) {
        message.channel.send(
          "Acho que estou com problemas. Por favor chame meu criador."
        );
      }
    }

    console.log(`||<URL: ${urls[x]}`);
    message.channel.send(urls[x]);
  });
};
