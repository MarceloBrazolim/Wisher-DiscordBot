const getImage = require("../../util/getImage");

module.exports = async (message) => {
  const xpath = ".GifList .column .GifListItem .Gif img";
  const path = "https://tenor.com/search/astolfo-gifs";
  const att = "src";
  await message.channel.send(await getImage(message, path, xpath, att));
};
