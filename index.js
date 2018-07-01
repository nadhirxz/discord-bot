const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) =>  {
    if(message.content == 'You gay') {
        message.channel.sendMessage('No u');
    }

});

bot.login('NDYxMTg2ODIzOTU2NDYzNjU3.DhPpSA.vGJK0ODWgJ6W3wto_n-L2oo45WY');