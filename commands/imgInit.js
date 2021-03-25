const astolfo = require("./imgInit/astolfo");
const img = require("./imgInit/img");
// const gif = require("./imgInit/gif");

const Scraper = require("images-scraper");
const google = new Scraper({
  puppeteer: {
    headless: true,
  },
  safe: true,
});

module.exports = async (message, command, args) => {
  // Forbidden terms
  var argsLower = [];
  for (let x in args) {
    argsLower[x] = args[x].toLowerCase();
  }
  for (let x in argsLower) {
    switch (argsLower[x]) {
      case "daddy":
      case "mommy":
        await message.channel.send("n vou procurar por isso.. 😑");
        return;
    }
  }

  switch (command) {
    case "img":
    case "image":
      try {
        var result = await img(
          message,
          args.join("+").replace(/&/ig, ""),
          google
        );
      } catch {
        return;
      }
      break;

    // case "gif":
    //   await gif(message, args, command);
    //   break;

    case "astolfo":
      try {
        var result = await astolfo(message, google);
      } catch {
        return;
      }
      break;
  }
  await message.channel.send(result.url);

  // for (let x in argsLower) {
  //   switch (argsLower[x]) {
  //     case "criança":
  //     case "kid":
  //     case "children":
  //     case "baby":
  //       await message.channel.send("uhg 😒");
  //   }
  // }

  return;
};
