exports.run = async (client, message, args) => {
    await message.reply(` \`🏓\` Pong! I replied in *${(Date.now() - message.createdTimestamp)/1000}* seconds.`).catch(console.error);
};

exports.name = "ping";