import dotenv from "dotenv";
dotenv.config();

import { Client, GatewayIntentBits, Partials } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on("message", (msg) => {
  console.log(msg);
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});
client.login(process.env.DISCORD_TOKEN);
