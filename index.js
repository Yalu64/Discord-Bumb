const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  sendBump()
    setInterval(() => {
        sendBump()
    }, 120*60000)
});

 
 
client.login("TOKEN");


var channels = ['CHANNELDID']

async function sendBump() {
    channels.forEach(channel => {
        var channel = await client.channels.cache.get(channel);
        if (channel) channel.send('!d bump');
        console.log('Bumped ' + channel.name);
    })
}
