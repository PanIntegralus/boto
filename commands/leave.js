exports.run = async (client, message, args) => {
    const queue = client.player.getQueue(message.guild);

    queue.destroy();
    await message.reply("`✅` Player has disconnected.")
};

exports.name = "leave";