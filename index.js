require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

console.log('THIS IS LATEST VERSION');
console.log('Token exists:', !!process.env.DISCORD_TOKEN);
console.log('Token length:', process.env.DISCORD_TOKEN?.length);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', c => {
  console.log(`✅ Logged in as ${c.user.tag}`);
});

const PORT = process.env.PORT || 3000;
http.createServer((req, res) => res.end('alive')).listen(PORT, () => {
  console.log(`HTTP on port ${PORT}`);
});

console.log('Starting login at:', new Date().toISOString());

client.login(process.env.DISCORD_TOKEN).then(() => {
  console.log('Login resolved at:', new Date().toISOString());
}).catch(err => {
  console.error('Login FAILED:', err.message);
});

setTimeout(() => {
  console.log('Bot status after 30s:', client.isReady() ? 'READY' : 'NOT READY');
}, 30000);

setTimeout(() => {
  console.log('Bot status after 60s:', client.isReady() ? 'READY' : 'NOT READY');
}, 60000);
