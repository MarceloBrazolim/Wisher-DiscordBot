module.exports = async (client) => {
  const channel = await client.channels.fetch(message.channel.id);

  channel.messages.fetch().then((messages) => {
    for (const element in messages) {
      console.log(messages[element].content);
    }
  });
};
