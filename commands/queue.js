exports.run = async (client, message, args) => {
    const queue = client.player.getQueue(message.guild);
    
    if(!queue || !queue.playing)
    {
        await message.reply("`❌` The queue is empty.");
        return;
    }

    const queueString = queue.tracks.slice(0, 10).map((song, i) => {
        return `${i + 1})  \`[${song.duration}]\` ${song.title} - <@${song.requestedBy.id}>`;
    }).join("\n");

    await message.reply(`Current song: ${queue.current} <@${queue.current.requestedBy.id}>\n\nNext songs: ${queueString}`);
};

exports.name = "queue";