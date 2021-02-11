const getImage = require("../util/getImage");

module.exports = async (message, args) => {
  if (command === "gif" && args[0]) {
    const xpath = ".GifList .column .GifListItem .Gif img";
    const path = "https://tenor.com/search/" + args + "-gifs"; // gif search engine
    const att = "src";
    await getImage(message, path, xpath, att);
  } else {
    message.channel.send("Mas você nem me falou o que procurar!");
  }
};
