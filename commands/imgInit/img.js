const getImage = require("../../util/getImage");

module.exports = async (message, args) => {
  if (args[0]) {
    const xpath = ".image a.link img";
    const path = "https://www.dogpile.com/serp?qc=images&q=" + args; // jpg/png search engine
    const att = "src";
    await getImage(message, path, xpath, att, args);
  } else {
    await message.channel.send("Mas você nem me falou o que procurar!");
  }
  return;
};

// const { shuffle } = require("lodash");

// module.exports = async (message, query, google) => {
//   if (!query) {
//     message.channel.send("Mas você nem me falou o que procurar!");
//     throw "No query given";
//   }

//   const result = shuffle(await google.scrape(query, 15));
//   // const result = shuffle(await google.scrape(query + "&safe=active", 40));
//   if (result[0] === undefined) {
//     message.channel.send("Ops.. Não achei o que procurava.. 😔");
//     throw "No results found";
//   }
//   console.log(`||>|Url: ${result[0].url}`);

//   return result[0];
// };
