const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) =>  {
    if(message.content == 'You gay') {
        message.channel.sendMessage('No u');
    }

});

bot.login(' ');