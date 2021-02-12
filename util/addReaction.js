const addReaction = (message, reactions) => {
  message.react(reactions[0]);
  reactions.shift();
  if (reactions.length > 0) {
    setTimeout(() => addReaction(message, reactions), 500);
  }
};

module.exports = async (message, reactions = []) => {
  await addReaction(message, reactions);
};
