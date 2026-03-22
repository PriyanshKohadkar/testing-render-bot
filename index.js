const WebSocket = require('ws');
global.WebSocket = WebSocket;
require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const keepAlive = require('./keep_alive');

console.log('Token exists:', !!process.env.DISCORD_TOKEN);

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', c => {
  console.log(`✅ Logged in as ${c.user.tag}`);
});

// Start HTTP server FIRST then login
keepAlive().then(() => {
  console.log('Starting login...');
  client.login(process.env.DISCORD_TOKEN).then(() => {
    console.log('Login resolved!');
  }).catch(err => {
    console.error('Login FAILED:', err.message);
  });
});

setTimeout(() => console.log('30s status:', client.isReady() ? 'READY' : 'NOT READY'), 30000);
setTimeout(() => console.log('60s status:', client.isReady() ? 'READY' : 'NOT READY'), 60000);
