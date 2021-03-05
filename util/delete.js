// Delete MongoDB on "util/delete.js".
const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");

module.exports = async (u, message) => {
  await mongo().then(async (mongoose) => {
    try {
      const del = await BDStorage.deleteOne({
        mID: u,
        gID: message.channel.guild.id,
      });
      console.log(`D|>|Deleted ${del.n} entries from ${u}.`);

      const debugEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setDescription(`Registros para <@!${u}> deletados 👍`);
      await message.channel.send(debugEmbed);
      console.log(`O|>|Deleted: ${u}`);
    } catch (e) {
      console.error(`X|<|${e} at delete.js`);
      const debugEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setDescription(`Houve um erro ao deletar os dados de <@!${u}>...`);
      await message.channel.send(debugEmbed);
    } finally {
      await mongoose.connection.close();
    }
  });
};
