const getImage = require("../../util/getImage");

module.exports = async (message) => {
  const xpath = ".image a.link img";
  const path = "https://www.dogpile.com/serp?qc=images&q=astolfo+fate+gifs"
  // const xpath = ".GifList .column .GifListItem .Gif img";
  // const path = "https://tenor.com/search/astolfo-fate-gifs";
  const att = "src";
  await getImage(message, path, xpath, att);
  return;
};

// const { shuffle } = require("lodash");

// module.exports = async (message, google) => {
//   const result = shuffle(await google.scrape("astolfo+fate+apocrypha+gif", 20));
//   // const result = shuffle(await google.scrape(query + "&safe=active", 40));
//   if (result[0] === undefined) {
//     message.channel.send("Ops.. Não achei o que procurava.. 😔");
//     throw "No results found";
//   }
//   console.log(`||>|Url: ${result[0].url}`);

//   return result[0];
// };
