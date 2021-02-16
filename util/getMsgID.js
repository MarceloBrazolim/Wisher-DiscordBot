module.exports = async (client) => {
  const messadeID = await message.channel.fetch(message.id);

  channel.messages.fetch().then((messages) => {
    for (const element in messages) {
      console.log(messages[element].content);
    }
  });
};
