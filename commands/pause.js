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

    queue.setPaused(true);
    
    message.reply("`⏸` Player has been paused.")
};

exports.name = "pause";