const { Client, GatewayIntentBits, Collection } = require("discord.js");

const fs = require("fs");

const client = new Client({
    intents:
    [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    ]
});

client.config = require("./config.json");

// Read events and commands folder an load them
client.commands = new Collection();

const events = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of events)
{
  const eventName = file.split(".")[0];
  const event = require(`./events/${file}`);
  client.on(eventName, event.bind(null, client));
};

const commands = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commands)
{
  const commandName = file.split(".")[0];
  const command = require(`./commands/${file}`);

  console.log(`Attempting to load command ${commandName}`);
  client.commands.set(commandName, command);
};

client.login(client.config.token);