require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', c => {
  console.log(`✅ Logged in as ${c.user.tag}`);
});

client.login(process.env.DISCORD_TOKEN).then(() => {
  console.log('Login resolved!');
}).catch(err => {
  console.error('Login FAILED:', err.message);
});

const PORT = process.env.PORT || 3000;
http.createServer((req, res) => res.end('alive')).listen(PORT, () => {
  console.log(`HTTP on port ${PORT}`);
});
