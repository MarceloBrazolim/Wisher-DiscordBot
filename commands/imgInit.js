const astolfo = require("./imgInit/astolfo");
const img = require("./imgInit/img");
const gif = require("./imgInit/gif");

// const Scraper = require("images-scraper");
// const google = new Scraper({
//   puppeteer: {
//     headless: true,
//   },
//   safe: true,
// });

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
        await img(message, args.join("+").replace(/&/gi, " "));

        // const result = await img(
        //   message,
        //   args.join("+").replace(/&/gi, " "),
        //   google
        // );
        // await message.channel.send(result.url);
      } catch {
        return;
      }
      break;

    case "gif":
      await gif(message, args.join("+").replace(/&/gi, " "), command);
      break;

    case "astolfo":
      try {
        await astolfo(message)

        // const result = await astolfo(message, google);
        // await message.channel.send(result.url);
      } catch {
        return;
      }
      break;
  }

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
