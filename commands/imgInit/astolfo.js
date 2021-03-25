// const getImage = require("../../util/getImage");

// module.exports = async (message, command) => {
//   const xpath = ".GifList .column .GifListItem .Gif img";
//   const path = "https://tenor.com/search/astolfo-gifs";
//   const att = "src";
//   await getImage(message, path, xpath, att, command);
//   return;
// };

const { shuffle } = require("lodash");

module.exports = async (message, google) => {
  const result = shuffle(await google.scrape("astolfo+fate+apocrypha+gif", 20));
  // const result = shuffle(await google.scrape(query + "&safe=active", 40));
  if (result[0] === undefined) {
    message.channel.send("Ops.. Não achei o que procurava.. 😔");
    throw "No results found";
  }
  console.log(`||>|Url: ${result[0].url}`);

  return result[0];
};
