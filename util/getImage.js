const request = require("request");
const { load } = require("cheerio");
const _ = require("lodash");

module.exports = async (message, path, xpath, att, command, birthdayEmbed) => {
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
      console.error(`X|<|${error}`);
      return;
    }

    $ = load(body);

    var links = $(xpath);
    var urls = new Array(links.length)
      .fill(0)
      .map((v, i) => links.eq(i).attr(att));

    if (!urls[0]) {
      console.log("||>|No results");
      message.channel.send("Ops.. Não achei o que procurava.. 😔");
      return;
    }

    urls = _.shuffle(urls);

    var x = 0;
    while (!urls[x].startsWith("http")) {
      console.log(`D|>|X+1: ${urls[x]}`);
      x += 1;
      if (x == 25 && !urls[x].startsWith("http")) {
        message.channel.send(
          "Acho que estou com problemas. Por favor chame meu criador."
        );
      }
    }

    console.log(`||>|URL: ${urls[x]}`);
    switch (command) {
      case "bdEmbed":
      case "happyBd":
      case "happy":
      case "h":
      case "bd":
      case "birthday":
        birthdayEmbed.setImage(urls[x]);
        // await message.channel.send("@everyone");
        message.channel.send(birthdayEmbed);
        break;
      default:
        message.channel.send(urls[x]);
        break;
    }
  });
};
