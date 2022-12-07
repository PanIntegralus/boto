const { Player, QueryType } = require("discord-player");

exports.run = async (client, message, args) => {
    if (!args[0])
    {
        return message.reply("`❌` Must provide an argument, like an URL or a name.");
    }

    if (!message.member.voice.channel)
    {
        return message.reply(" `❌` You must be in a voice channel to execute this command.");
    }

    let url = args[0];

    // Create player for voice chat
    client.player = new Player(client, {
        autoSelfDeaf: true,
        leaveOnEmpty: false,
        ytdlOptions: {
            filter: 'audioonly',
            quality: 'highestaudio',
            highWaterMark: 1 << 25
        },
        metadata: {
            channel: message.member.voice.channel
        }
    });

    const queue = await client.player.createQueue(message.member.voice.channel);
    if (!queue.connection) await queue.connect(message.member.voice.channel);

    const result = await client.player.search(url, {
        requestedBy: message.member,
        searchEngine: QueryType.AUTO
    });

    if (result.tracks.length === 0)
    {
        await message.reply("No results found.");
        return;
    }

    const song = result.tracks[0];
    await queue.addTrack(song);

    message.reply(`\`🎶\` Added **${song}** to the queue.`)

    if(!queue.playing) await queue.play();
}

exports.name = "play";