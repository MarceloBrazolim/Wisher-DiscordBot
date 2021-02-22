const getImage = require("../../util/getImage");

module.exports = async (message, args) => {
  if (args[0]) {
    const xpath = ".image a.link";
    const path = "https://www.dogpile.com/serp?qc=images&q=" + args; // jpg/png search engine
    const att = "href";
    await message.channel.send(await getImage(message, path, xpath, att, { option: "msg" }));
  } else {
    await message.channel.send("Mas você nem me falou o que procurar!");
  }
};
