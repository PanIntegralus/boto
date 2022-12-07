exports.run = async (client, message, args) => {
    const queue = client.player.getQueue(message.guild);

    await queue.stop();
    await message.reply("`⏹` Player has stopped.")
};

exports.name = "stop";