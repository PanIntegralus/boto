exports.run = async (client, message, args) => {
    const queue = client.player.getQueue(message.guild);

    if (!queue)
    {
        await message.reply("`❌` The queue is empty.")
        return;
    }

    const currentSong = queue.current;

    queue.skip();

    message.reply("`⏩` Song skipped.")
};

exports.name = "skip";