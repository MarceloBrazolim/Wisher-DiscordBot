const request = require("request");
const { load } = require("cheerio");
const { shuffle } = require("lodash");
const { debugg } = require("../config.json");

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
      console.error(`X|<|${error} at getImage.js.request()`);
      return;
    }

    $ = load(body);

    var links = $(xpath);
    var urls = new Array(links.length)
      .fill(0)
      .map((v, i) => links.eq(i).attr(att));

    if (!urls[0]) {
      if (debugg) console.log("||>|No results");
      await message.channel.send("Ops.. Não achei o que procurava.. 😔");
      return;
    }

    urls = shuffle(urls);
    var x = 0;
    while (!urls[x].startsWith("http")) {
      if (debugg) console.log(`D|>|url[x]+1: ${urls[x]}`);
      x += 1;
      if (x == 25 && !urls[x].startsWith("http")) {
        await message.channel.send(
          "Acho que estou com problemas. Por favor chame meu criador."
        );
      }
    }

    if (debugg) console.log(`||>|URL: ${urls[x]}`);
    switch (command) {
      case "bd":
      case "birthday":
      case "aniversario":
      case "debugg":
      case "d":
        embed.setImage(urls[x]);
        await message.send("@everyone", { embed });
        break;
      default:
        var argsLower = [];
        for (let x in args) {
          argsLower[x] = args[x].toLowerCase();
        }

        // for (let key of censorList.listToSpoiler) {
        //   if (argsLower.includes(key)) {
        //     urls[x] = "||" + urls[x] + "||";
        //     break;
        //   }
        // }

        await message.channel.send(urls[x]);

        for (let key of censorList.listToUhg) {
          if (argsLower.includes(key)) {
            await message.react("😒");
            break;
          }
        }
        break;
    }
  });
};
