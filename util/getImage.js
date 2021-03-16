const request = require("request");
const { load } = require("cheerio");
const { shuffle } = require("lodash");

const censorList = require("../censorList.json");

module.exports = async (message, path, xpath, att, command, args, embed) => {
  var options = {
    url: path,
    method: "GET",
    headers: {
      Accept: "text/html",
      "User-Agent": "Chrome",
    },
  };

  request(options, async function (error, response, body) {
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
      await message.channel.send("Ops.. Não achei o que procurava.. 😔");
      return;
    }

    urls = shuffle(urls);
    var x = 0;
    while (!urls[x].startsWith("http")) {
      console.log(`D|>|X+1: ${urls[x]}`);
      x += 1;
      if (x == 25 && !urls[x].startsWith("http")) {
        await message.channel.send(
          "Acho que estou com problemas. Por favor chame meu criador."
        );
      }
    }

    console.log(`||>|URL: ${urls[x]}`);
    switch (command) {
      case "bd":
      case "birthday":
      case "debugg":
      case "d":
        embed.setImage(urls[x]);
        await message.channel.send("@everyone", { embed });
        break;
      default:
        var argsLower = [];
        for (let x in args) {
          argsLower[x] = args[x].toLowerCase();
        }

        for (let key of censorList.listToSpoiler) {
          if (argsLower.includes(key)) {
            urls[x] = "||" + urls[x] + "||";
            break;
          }
        }

        for (let key of censorList.listToUhg) {
          if (argsLower.includes(key)) {
            await message.react("😒");
            break;
          }
        }

        await message.channel.send(urls[x]);
        break;
    }
  });
};
