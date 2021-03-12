const request = require("request");
const { load } = require("cheerio");
const _ = require("lodash");
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

    urls = _.shuffle(urls);
    var ur = urls[x];
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

        for (let h in argsLower) {
          if (argsLower.includes(censorList.listToSpoiler[h])) {
            ur = "||" + ur + "||";
            break;
          }
        }

        var ugh = false;
        for (let h in argsLower) {
          if (argsLower.includes(censorList.listToUhg[h])) {
            ugh = true;
            break;
          }
        }

        if (ugh == true) {
          await message.channel.send(`uhg 😒\n${ur}`);
        } else {
          await message.channel.send(ur);
        }

        // switch (argsLower[h]) {
        //   // MISC - expl.: Too random
        //   // Censored for safety
        //   case "gif":
        //   case "img":
        //   case "image":
        //   // GORE
        //   case "gore":
        //   // NSFW
        //   case "lolicon":
        //   case "loli":
        //   case "shotacon":
        //   case "shota":
        //   case "netorare":
        //   case "milf":
        //   case "estupro":
        //   case "rape":
        //   case "bdsm":
        //   case "incesto":
        //   case "nsfw":
        //   case "porn":
        //   case "porno":
        //   case "hentai":
        //   case "rule34":
        //   case "sex":
        //   case "sexo":
        //   case "penis":
        //   case "penis2":
        //   case "futanari":
        //     ur = "||" + urls[x] + "||";
        //     break;
        // }
        // switch (argsLower[h]) {
        //   case "criança":
        //   case "kid":
        //   case "children":
        //   case "baby":
        //     await message.channel.send(`uhg 😒\n${ur}`);
        //     break;
        //   default:
        //     await message.channel.send(ur);
        //     break;
        // }
        break;
    }
  });
};
