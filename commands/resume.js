exports.run = async (client, message, args) => {
    const queue = client.player.getQueue(message.guild);

    if (!queue)
    {
        await message.reply("`❌` The queue is empty.");
        return;
    }

    if (!client.player.isPaused(true))
    {
        await message.reply("`❌` Player is not paused.");
    }

    queue.setPaused(false);
    
    message.reply("`⏯` Player has been resumed.");
};

exports.name = "resume";