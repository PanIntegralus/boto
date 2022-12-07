exports.run = async (client, message, args) => {
    const queue = client.player.getQueue(message.guild);

    await queue.destroy();
    await message.reply("`✅` Player has disconnected.")
};

exports.name = "leave";