const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");
const moment = require("moment");

var ID = client.users.cache.get("805035898990755850");

module.exports = async (message, args, u, client) => {
  const id = u.id;
  await mongo().then(async (mongoose) => {
    try {
      const results = await BDStorage.findOne({
        id,
      });

      const { _id, date } = results.bddates;

      const listEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setTitle("Aniversariante")
        .setAuthor("Wisher", ID.displayAvatarURL({ dynamic: true }))
        .setDescription(`@${u.username} faz aniversário em ${moment(new Date(date))}`);
      message.channel.send(listEmbed);
    } finally {
      mongoose.connection.close();
    }
  });
};
