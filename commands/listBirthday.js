const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const moment = require("moment");

module.exports = async (message, args, u, client) => {
  const id = u.id;
  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.findOne({
        id,
      });

      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Lista de comandos disponíveis")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
        .addField();
      message.channel.send(listEmbed)
    } finally {
      mongoose.connection.close();
    }
  });
};
