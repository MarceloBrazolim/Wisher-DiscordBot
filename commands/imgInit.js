const getImage = require("../util/getImage")

module.exports = async (message, command, args) => {
  // Forbidden terms
  for (let x in args) {
    if (
      args[x] == "criança" ||
      args[x] == "kid" ||
      args[x] == "children" ||
      args[x] == "baby"
    ) {
      message.channel.send("uhg 😒");
    } else if (args[x] == "daddy" || args[x] == "mommy") {
      message.channel.send("n vou procurar por isso.. 😑");
      return;
    }
  }

  switch (command) {
    case "img":
      if (command === "img" && args[0]) {
        const xpath = ".image a.link";
        const path = "https://www.dogpile.com/serp?qc=images&q=" + args; // jpg/png search engine
        const att = "href";
        getImage(message, path, xpath, att);
      } else {
        message.channel.send("Mas você nem me falou o que procurar!");
      }
      break;
    case "gif":
      if (command === "gif" && args[0]) {
        const xpath = ".GifList .column .GifListItem .Gif img";
        const path = "https://tenor.com/search/" + args + "-gifs"; // gif search engine
        const att = "src";
        getImage(message, path, xpath, att);
      } else {
        message.channel.send("Mas você nem me falou o que procurar!");
      }
      break;
    case "astolfo":
      const xpath = ".GifList .column .GifListItem .Gif img";
      const path = "https://tenor.com/search/astolfo-gifs";
      const att = "src";
      getImage(message, path, xpath, att);
      break;
  }
};
