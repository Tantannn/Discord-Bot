import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits, Partials } from "discord.js";
import ytld from "ytdl-core";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

let PREFIX = "!";

function play(connection, message) {
  // var server = servers[]
}

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply("Pong!");
  } else if (message.content === "yey") {
    message.reply("YEYY!");
  }
  console.log(message.voice.channelId)
  let args = message.content.substring(PREFIX.length).split(" ");
  switch (args[0]) {
    case "play":
      if (!args[1]) return message.reply("Please add a link! UwU");
      if (!message.member.voiceChanel)
        return message.reply("Get in the voice Channel first!");
      break;
    case "stop":
      break;
    default:
      break;
  }
});
client.login(process.env.DISCORD_TOKEN);
