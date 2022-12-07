exports.run = async (client, message, args) => {
    const queue = client.player.getQueue(message.guild);

    if (!queue)
    {
        await message.reply("`❌` The queue is empty.")
        return;
    }

    if (client.player.isPaused())
    {
        await message.reply("`❌` Player is already paused.")
    }

    await queue.setPaused(true);   
    await message.reply("`⏸` Player has been paused.")
};

exports.name = "pause";