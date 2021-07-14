const Discord = require('discord.js-selfbot');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  sendBump()
    setInterval(() => {
        sendBump()
    }, 120*60000)
});

 
 
client.login("ODY0NDY5ODY4MzcwOTg0OTgx.YO3rnw.TRkhanJqgcLb41bFOv8_Ng2qPsM");


var channels = ['864467238500565013']

async function sendBump() {
    channels.forEach(channel => {
        var channel = await client.channels.cache.get(channel);
        if (channel) channel.send('!d bump');
        console.log('Bumped ' + channel.name);
    })
}