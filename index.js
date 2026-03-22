require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

console.log('THIS IS LATEST VERSION');
console.log('Token exists:', !!process.env.DISCORD_TOKEN);

// ── Start HTTP server FIRST ──
const PORT = process.env.PORT || 3000;
http.createServer((req, res) => res.end('alive')).listen(PORT, () => {
  console.log(`HTTP on port ${PORT}`);
  
  // ── Then login AFTER HTTP is ready ──
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  
  client.once('ready', c => {
    console.log(`✅ Logged in as ${c.user.tag}`);
  });

  console.log('Starting login at:', new Date().toISOString());
  client.login(process.env.DISCORD_TOKEN).then(() => {
    console.log('Login resolved!');
  }).catch(err => {
    console.error('Login FAILED:', err.message);
  });

  setTimeout(() => console.log('30s status:', client.isReady() ? 'READY' : 'NOT READY'), 30000);
  setTimeout(() => console.log('60s status:', client.isReady() ? 'READY' : 'NOT READY'), 60000);
});
