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
console.log("Before login");

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});
console.log("Before login");

(async () => {
  console.log("Before login");
  await client.login(process.env.TOKEN);
  console.log("After login");
})();


