// Delete MongoDB on "util/delete.js".
const Discord = require("discord.js");
const mongo = require("../mongo");
const BDStorage = require("../schemes/main-schema");

module.exports = async (u, message) => {
  await mongo().then(async () => {
    try {
      const del = await BDStorage.updateOne(
        {
          _id: u,
        },
        {
          $pull: { gID: message.channel.guild.id },
        },
        {
          safe: true,
          multi: true,
        }
      );
      if (del.n == 0) throw `X|>|No elements deleted of a minimum: 1`;
      // console.log(`D|>|Deleted ${del.n} entry from ${u}.`);

      const debugEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setDescription(`Registros para <@!${u}> deletados 👍`);
      await message.channel.send(debugEmbed);
      console.log(`O|>|Removed: ${message.channel.guild.id} from user: ${u}`);
    } catch (err) {
      console.error(`X|<|${err} at delete.js`);
      const debugEmbed = new Discord.MessageEmbed()
        .setColor("#831fde")
        .setDescription(`Houve um erro ao deletar os dados de <@!${u}>...`);
      await message.channel.send(debugEmbed);
    }
  });
};
