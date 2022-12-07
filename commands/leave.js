exports.run = async (client, message, args) => {
    const queue = client.player.getQueue(message.guild);

    // if (message.member.voice.channel != client.player.channel)
    // {
    //     await message.reply("`❌` You must be in the same channel as the bot.");
    //     return;
    // };

    await queue.destroy();
    await message.reply("`✅` Player has disconnected.")
};

exports.name = "leave";
