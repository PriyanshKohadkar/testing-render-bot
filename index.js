require("dns").setDefaultResultOrder("ipv4first");

require("dotenv").config();
const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();

app.get("/", (req, res) => res.send("Bot is running"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Web server active on port " + PORT);
});

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("debug", console.log);
client.on("error", console.error);

(async () => {
  console.log("Before login");
  await client.login(process.env.TOKEN);
  console.log("After login");
})();
