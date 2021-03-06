const Discord = require("discord.js");
const request = require("request");
const { load } = require("cheerio");
const _ = require("lodash");

module.exports = async (message, path, xpath, att, command, args, embed) => {
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
      case "bd":
      case "birthday":
      case "debugg":
      case "d":
        embed.setImage(urls[x]);
        message.channel.send("@everyone", { embed });
        break;
      default:
        for (let h in args) {
          switch (args[h]) {
            // GORE
            case "gore":
            // NSFW
            case "lolicon":
            case "loli":
            case "shotacon":
            case "shota":
            case "netorare":
            case "milf":
            case "estupro":
            case "rape":
            case "bdsm":
            case "incesto":
            case "nsfw":
            case "porn":
            case "hentai":
            case "rule34":
            case "sex":
            case "sexo":
            case "penis":
            case "penis2":
            case "futanari":
              var ur = "||" + urls[x] + "||";
              break;
          }
        }
        if (ur) {
          message.channel.send(ur);
          break;
        } else {
          const urEmbed = new Discord.MessageEmbed().setImage(urls[x]);
          message.channel.send(urEmbed);
          break;
        }
    }
  });
};
